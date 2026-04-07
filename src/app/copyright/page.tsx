import Nav from '@/components/Nav'

export const metadata = {
  title: 'Copyright',
  description: 'Copyright notice for all artwork and content on AwakenArts.com.',
}

export default function CopyrightPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">

        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Legal</p>

        <h1 className="legal-page__heading">Copyright</h1>

        <p className="legal-page__body">
          All artwork is property of AwakenArts.com and cannot be used or reproduced by any person
          or company without being purchased for a fee from, or having the written consent of,
          AwakenArts.com. Any unauthorized reproduction of artwork is subject to legal action and
          is protected by Federal, State, and Local law.
        </p>

        <p className="legal-page__body">
          Any concerns as to the legality of reproduction should be directed to:
        </p>

        <address className="legal-page__address">
          THE XYZ COMPANY<br />
          Attn: Legal Dept., 3rd Floor<br />
          1234 W. Any Rd.<br />
          AnyTown, IN 12345-6789<br />
          U.S.A.<br />
          (555) 555-5555
        </address>

      </main>
    </>
  )
}
