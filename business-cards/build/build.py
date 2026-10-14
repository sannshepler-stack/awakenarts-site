"""AwakenArts business card (3.5 x 2 in, 0.125 in bleed) + email signature."""
import base64, io, pathlib, qrcode, qrcode.image.svg
from playwright.sync_api import sync_playwright

S = pathlib.Path(__file__).parent
OUT = S / "out"; OUT.mkdir(exist_ok=True)
BRAND = pathlib.Path("/home/claude/awakenarts-site/public/images/brand")

NAVY, CREAM, GOLD_TEXT, GOLD_RULE = "#1C2B3A", "#FAF6EC", "#7E5F12", "#B08A3E"
logo_svg = (BRAND / "AwakenArts-Logo-Compact-Horizontal.svg").read_text()
logo_uri = "data:image/svg+xml;base64," + base64.b64encode(logo_svg.encode()).decode()

# QR -> https://awakenarts.com, high error correction, navy modules, 4-module quiet zone
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=0, box_size=10)
qr.add_data("https://awakenarts.com"); qr.make(fit=True)
m = qr.get_matrix(); n = len(m)
rects = "".join(f'<rect x="{x}" y="{y}" width="1.02" height="1.02"/>' for y, row in enumerate(m) for x, v in enumerate(row) if v)
qr_svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n} {n}" shape-rendering="crispEdges"><g fill="{NAVY}">{rects}</g></svg>'
qr_uri = "data:image/svg+xml;base64," + base64.b64encode(qr_svg.encode()).decode()

FONTS = f"""
@font-face {{ font-family: 'Cormorant Garamond'; src: url('file://{S}/fonts/CormorantGaramond[wght].ttf'); font-weight: 300 700; }}
@font-face {{ font-family: 'Cormorant Garamond'; font-style: italic; src: url('file://{S}/fonts/CormorantGaramond-Italic[wght].ttf'); font-weight: 300 700; }}
@font-face {{ font-family: 'Lora'; src: url('file:///usr/share/fonts/truetype/google-fonts/Lora-Variable.ttf'); font-weight: 400 700; }}
"""

# Geometry (inches). Page = trim + bleed on every side.
BLEED, TRIM_W, TRIM_H, SAFE = 0.125, 3.5, 2.0, 0.125
PW, PH = TRIM_W + 2 * BLEED, TRIM_H + 2 * BLEED
FRAME = 0.19  # gold hairline frame, inset from trim (kept inside safe area)

import base64 as _b
def _uri(p, mime="image/png"): return f"data:{mime};base64," + _b.b64encode(pathlib.Path(p).read_bytes()).decode()
logo_navy_uri = _uri(BRAND/"AwakenArts-Logo-Compact-Horizontal-OnNavy.svg", "image/svg+xml")
mono_uri = _uri(BRAND/"AwakenArts-Monogram.svg", "image/svg+xml")
ann_uri = _uri(S/"ann_gold.png")
art_uri = _uri(S/"merriweather_card.png")
fol_uri = _uri(S/"foliage_back.png")
divider_uri = _uri(BRAND/"ornaments/AwakenArts-Section-Divider-Gold.png")
GOLD_LT = "#C9A84C"
PANEL = 0.62  # navy panel on the back, from trim edge

CARD_CSS = f"""
{FONTS}
* {{ margin:0; padding:0; box-sizing:border-box; }}
.page {{ width:{PW}in; height:{PH}in; background:{CREAM}; position:relative; overflow:hidden; color:{NAVY}; }}
.t {{ position:absolute; }}  /* positioned in trim coordinates via inline left/top */
/* FRONT — cream, Merriweather illustration on the left 38% */
.front {{ background:{CREAM}; }}
.front .art {{ position:absolute; left:0; top:0; height:{PH}in; width:{BLEED+1.40}in; object-fit:cover; object-position:left center; }}
.front .txt {{ position:absolute; left:{BLEED+1.50}in; top:{BLEED}in; width:1.80in; height:{TRIM_H}in; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; }}
.front .logo {{ width:1.62in; display:block; }}
.front .tag {{ font-family:'Cormorant Garamond', serif; font-weight:500; font-size:15pt; line-height:1.03; margin-top:0.105in; color:{NAVY}; }}
.front .rule {{ width:0.34in; border-top:0.6pt solid {GOLD_RULE}; margin:0.095in auto 0.08in; }}
.front .promise {{ font-family:'Cormorant Garamond', serif; font-style:italic; font-weight:500; font-size:9.2pt; line-height:1.18; color:{GOLD_TEXT}; }}
.front .url {{ font-family:'Lora', serif; font-size:5.4pt; letter-spacing:0.22em; text-transform:uppercase; color:{NAVY}; margin-top:0.18in; }}
/* BACK — all cream, monogram above the name, QR on the right */
.back .fol {{ position:absolute; width:1.45in; left:{BLEED+TRIM_W-1.30}in; top:{BLEED+1.44}in; }}
.back .txt {{ position:absolute; left:{BLEED+0.30}in; top:{BLEED}in; height:{TRIM_H}in; width:2.1in; display:flex; flex-direction:column; justify-content:center; }}
.back .mono {{ width:0.30in; display:block; margin:0 0 0.07in -0.02in; }}
.back .name {{ font-family:'Cormorant Garamond', serif; font-weight:500; font-size:15.5pt; line-height:1; letter-spacing:0.01em; }}
.back .div {{ width:0.95in; display:block; margin:0.06in 0 0.075in -0.02in; }}
.back .cred {{ font-family:'Lora', serif; font-size:6.4pt; line-height:1.5; }}
.back .contact {{ font-family:'Lora', serif; font-size:6.6pt; line-height:1.5; margin-top:0.08in; }}
.back .contact .url {{ color:{NAVY}; }}
.back .qr {{ position:absolute; left:{BLEED+TRIM_W-0.22-0.64}in; top:{BLEED+(TRIM_H-0.64)/2}in; width:0.64in; height:0.64in; }}
"""

FRONT = f"""<div class="page front">
  <img class="art" src="{art_uri}" alt="Merriweather">
  <div class="txt">
    <img class="logo" src="{logo_uri}" alt="AwakenArts">
    <div class="tag">When Language<br>Shapes a Path</div>
    <div class="rule"></div>
    <div class="promise">Explore the Symbols<br>Shaping Your Story</div>
    <div class="url">AwakenArts.com</div>
  </div>
</div>"""

BACK = f"""<div class="page back">
  <div class="txt">
    <img class="mono" src="{mono_uri}" alt="">
    <div class="name">Susan Ann Shepler</div>
    <img class="div" src="{divider_uri}" alt="">
    <div class="cred">MA, Counseling<br>Certified Transformative Language Artist<br>Certified Journal Instructor</div>
    <div class="contact">info@awakenarts.com<br><span class="url">AwakenArts.com</span></div>
  </div>
  <img class="qr" src="{qr_uri}" alt="QR code to AwakenArts.com">
</div>"""


def card_doc(pages, guides=False):
    extra = ""
    if guides:
        extra = f"""
.trim {{ position:absolute; left:{BLEED}in; top:{BLEED}in; width:{TRIM_W}in; height:{TRIM_H}in; outline:0.5pt solid #d33; }}
.safe {{ position:absolute; left:{BLEED+SAFE}in; top:{BLEED+SAFE}in; width:{TRIM_W-2*SAFE}in; height:{TRIM_H-2*SAFE}in; outline:0.5pt dashed #29a; }}"""
        pages = [p.replace('">', '"><div class="trim"></div><div class="safe"></div>', 1) for p in pages]
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CARD_CSS}{extra}
@page {{ size:{PW}in {PH}in; margin:0; }} .page {{ page-break-after:always; }}</style></head>
<body>{''.join(pages)}</body></html>"""


def proof_doc():
    """Letter sheet: front + back at 100% with crop marks, bleed and safe guides."""
    def placed(page, label, top):
        left = (8.5 - PW) / 2
        marks = ""
        for (x, y) in [(left + BLEED, top + BLEED), (left + BLEED + TRIM_W, top + BLEED),
                       (left + BLEED, top + BLEED + TRIM_H), (left + BLEED + TRIM_W, top + BLEED + TRIM_H)]:
            for dx in (-1, 1):
                marks += f'<div style="position:absolute;left:{x + (0.18 if dx>0 else -0.43)}in;top:{y}in;width:0.25in;border-top:0.25pt solid #000"></div>' if (dx>0) == (x > 4.25) else ""
            for dy in (-1, 1):
                marks += f'<div style="position:absolute;top:{y + (0.18 if dy>0 else -0.43)}in;left:{x}in;height:0.25in;border-left:0.25pt solid #000"></div>' if (dy>0) == (y > top + PH/2) else ""
        g = page.replace('">', '"><div class="trim" style="z-index:5"></div><div class="safe" style="z-index:5"></div>', 1)
        return (f'<div style="position:absolute;left:{left}in;top:{top}in">{g}</div>{marks}'
                f'<div class="lbl" style="position:absolute;left:{left}in;top:{top - 0.62}in">{label}</div>')
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CARD_CSS}
.trim {{ position:absolute; left:{BLEED}in; top:{BLEED}in; width:{TRIM_W}in; height:{TRIM_H}in; outline:0.4pt solid rgba(200,40,40,.7); }}
.safe {{ position:absolute; left:{BLEED+SAFE}in; top:{BLEED+SAFE}in; width:{TRIM_W-2*SAFE}in; height:{TRIM_H-2*SAFE}in; outline:0.4pt dashed rgba(30,140,170,.8); }}
@page {{ size:8.5in 11in; margin:0; }}
body {{ width:8.5in; height:11in; position:relative; font-family:'Lora',serif; color:#333; }}
h1 {{ position:absolute; left:0.75in; top:0.6in; font-family:'Cormorant Garamond',serif; font-weight:500; font-size:20pt; color:{NAVY}; }}
.note {{ position:absolute; left:0.75in; top:1.05in; width:7in; font-size:8pt; line-height:1.5; }}
.lbl {{ font-size:8pt; letter-spacing:.12em; text-transform:uppercase; color:{GOLD_TEXT}; }}
.key {{ position:absolute; left:0.75in; top:9.7in; font-size:7.5pt; line-height:1.6; }}
</style></head><body>
<h1>AwakenArts Business Card — Print Proof</h1>
<div class="note">Print this page at 100% (Actual Size) to check the card at true size. Trim 3.5 × 2 in · bleed 0.125 in · safe margin 0.125 in.
Send <b>AwakenArts-Business-Card-Print.pdf</b> (2 pages, 3.75 × 2.25 in, no marks) to the printer.</div>
{placed(FRONT, "Front", 2.35)}
{placed(BACK, "Back", 5.75)}
<div class="key"><span style="color:#c33">━</span> Trim line &nbsp;&nbsp; <span style="color:#1e8caa">┅</span> Safe area — all type and the QR code sit inside it &nbsp;&nbsp; Background colours extend to the bleed edge.<br>
QR code: 0.64 in square, links to https://awakenarts.com (tested to scan).</div>
</body></html>"""


SIG = f"""<!-- AwakenArts email signature. Paste into your mail app's signature editor (open this file in a browser, select all, copy). -->
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:{CREAM};font-family:Georgia,'Times New Roman',serif;color:{NAVY};">
  <tr>
    <td style="padding:16px 22px 16px 20px;vertical-align:middle;background:{NAVY};">
      <a href="https://awakenarts.com" style="text-decoration:none;"><img src="https://awakenarts.com/images/brand/email/awakenarts-signature-logo.png" width="190" height="31" alt="AwakenArts" style="display:block;border:0;width:190px;height:auto;"></a>
      <div style="font-family:Georgia,serif;font-size:13px;line-height:1.3;color:{CREAM};padding-top:9px;">When Language Shapes a Path</div>
    </td>
    <td style="width:2px;background:{GOLD_LT};padding:0;font-size:0;line-height:0;">&nbsp;</td>
    <td style="padding:12px 20px 12px 20px;vertical-align:middle;">
      <div style="font-family:Georgia,serif;font-size:17px;line-height:1.2;color:{NAVY};">Susan Ann Shepler</div>
      <div style="font-family:Georgia,serif;font-size:11px;line-height:1.5;color:#4a5562;padding-top:4px;">MA, Counseling<br>Certified Transformative Language Artist<br>Certified Journal Instructor</div>
      <div style="font-family:Georgia,serif;font-size:12px;line-height:1.55;padding-top:5px;">
        <a href="mailto:info@awakenarts.com" style="color:{NAVY};text-decoration:none;">info@awakenarts.com</a>
        <span style="color:{GOLD_RULE};">&nbsp;·&nbsp;</span>
        <a href="https://awakenarts.com" style="color:{GOLD_TEXT};text-decoration:none;">AwakenArts.com</a>
      </div>
      <div style="font-family:Georgia,serif;font-style:italic;font-size:11px;line-height:1.4;color:{GOLD_TEXT};padding-top:4px;">Explore the Symbols Shaping Your Story</div>
    </td>
  </tr>
</table>
"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    # print-ready (no guides)
    (S / "card.html").write_text(card_doc([FRONT, BACK]))
    pg.goto(f"file://{S}/card.html"); pg.wait_for_timeout(400)
    pg.pdf(path=str(OUT / "AwakenArts-Business-Card-Print.pdf"), width=f"{PW}in", height=f"{PH}in", print_background=True)
    # proof sheet
    (S / "proof.html").write_text(proof_doc())
    pg.goto(f"file://{S}/proof.html"); pg.wait_for_timeout(400)
    pg.pdf(path=str(OUT / "AwakenArts-Business-Card-Proof.pdf"), format="Letter", print_background=True)
    # 600 dpi PNGs of each side at trim (for mockup + previews)
    dpi = 600; scale = dpi / 96
    pg2 = b.new_page(viewport={"width": int(PW * 96) + 1, "height": int(PH * 96) + 1}, device_scale_factor=scale)
    for name, html in (("front", FRONT), ("back", BACK)):
        (S / f"{name}.html").write_text(card_doc([html]))
        pg2.goto(f"file://{S}/{name}.html"); pg2.wait_for_timeout(400)
        pg2.screenshot(path=str(S / f"{name}_bleed.png"), clip={"x": 0, "y": 0, "width": PW * 96, "height": PH * 96})
    # email signature logo (2x for retina) + preview
    pg3 = b.new_page(viewport={"width": 400, "height": 80}, device_scale_factor=2)
    pg3.set_content(f'<html><body style="margin:0;background:{NAVY}"><img src="{logo_navy_uri}" style="width:190px;display:block"></body></html>')
    pg3.wait_for_timeout(300)
    pg3.locator("img").screenshot(path=str(OUT / "awakenarts-signature-logo.png"))
    (OUT / "AwakenArts-Email-Signature.html").write_text(SIG)
    pg4 = b.new_page(viewport={"width": 900, "height": 200}, device_scale_factor=2)
    (S / "sig_preview.html").write_text(f'<html><body style="margin:24px;background:#fff">' +
                    SIG.replace("https://awakenarts.com/images/brand/email/awakenarts-signature-logo.png", f"file://{OUT}/awakenarts-signature-logo.png") + "</body></html>")
    pg4.goto(f"file://{S}/sig_preview.html")
    pg4.wait_for_timeout(400)
    pg4.locator("table").screenshot(path=str(OUT / "AwakenArts-Email-Signature-Preview.png"))
    b.close()
print("built")
