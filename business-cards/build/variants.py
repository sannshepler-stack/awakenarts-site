"""Series fronts: same layout as the Merriweather card, different artwork panel."""
import pathlib
S = pathlib.Path(__file__).parent
src = (S / "build.py").read_text()
exec(src[: src.index("with sync_playwright() as p:")])  # shared CSS, BACK, card_doc, proof_doc, helpers

from playwright.sync_api import sync_playwright
BASE_FRONT = FRONT

def title(text, color, pos, shadow=False):
    sh = "text-shadow:0 0 3px rgba(28,43,58,.75),0 0 1px rgba(28,43,58,.9);" if shadow else ""
    return (f'<div style="position:absolute;{pos};font-family:\'Cormorant Garamond\',serif;font-weight:600;'
            f'font-size:7.2pt;letter-spacing:.2em;text-transform:uppercase;color:{color};{sh}">{text}</div>')

CENTER_UNDER = f"left:{BLEED+0.14}in;width:1.20in;text-align:center;bottom:{BLEED+0.15}in"
VARIANTS = {
    "Merriweather": ("merriweather_card.png", title("Merriweather", NAVY, CENTER_UNDER)),
    "Grismere": ("grismere_panel.png", title("Grismere", NAVY, CENTER_UNDER)),
    "Poppy": ("poppy_panel.png", title("Poppy", NAVY, CENTER_UNDER)),
    "QueenAnn": ("queenann_panel.png",
                 # hard light/dark edge, finished with a fine gold line
                 f'<div style="position:absolute;left:{BLEED+1.40}in;top:0;height:{PH}in;border-left:0.75pt solid {GOLD_RULE}"></div>'
                 # the bottom of this work is the word-figure itself, so the title sits in the open rust field above
                 + title("Queen Ann", CREAM, f"left:{BLEED+0.17}in;top:{BLEED+0.15}in")),
}

with sync_playwright() as p:
    b = p.chromium.launch()
    for name, (panel, extra) in VARIANTS.items():
        front = BASE_FRONT.replace(art_uri, _uri(S / panel)).replace('alt="Merriweather"', f'alt="{name}"')
        front = front.replace('<div class="txt">', extra + '<div class="txt">', 1)
        globals()["FRONT"] = front  # proof_doc reads FRONT
        pg = b.new_page()
        (S / f"card_{name}.html").write_text(card_doc([front, BACK]))
        pg.goto(f"file://{S}/card_{name}.html"); pg.wait_for_timeout(400)
        pg.pdf(path=str(OUT / f"AwakenArts-Business-Card-{name}-Print.pdf"), width=f"{PW}in", height=f"{PH}in", print_background=True)
        (S / f"proof_{name}.html").write_text(proof_doc())
        pg.goto(f"file://{S}/proof_{name}.html"); pg.wait_for_timeout(400)
        pg.pdf(path=str(OUT / f"AwakenArts-Business-Card-{name}-Proof.pdf"), format="Letter", print_background=True)
        pg2 = b.new_page(viewport={"width": int(PW * 96) + 1, "height": int(PH * 96) + 1}, device_scale_factor=600 / 96)
        (S / f"front_{name}.html").write_text(card_doc([front]))
        pg2.goto(f"file://{S}/front_{name}.html"); pg2.wait_for_timeout(400)
        pg2.screenshot(path=str(S / f"front_{name}_bleed.png"), clip={"x": 0, "y": 0, "width": PW * 96, "height": PH * 96})
    b.close()
print("variants built")
