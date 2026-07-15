import Nav from '@/components/Nav'

// Corrected 2026-07-15 per the AwakenArts Legal and Risk Standards
// package, Stage 1 item 2 of the Controlled Remediation Directive: the
// prior version of this page carried a fictitious "THE XYZ COMPANY"
// Indiana address and phone number left over from a template. This is
// the minimal accurate notice the directive calls for — the full
// Copyright/IP draft in `02-Website-Legal-Documents.md` Section D
// still has unresolved legal language (permission-request handling
// beyond the contact email) that hasn't been approved yet, so this
// page states only what's confirmed: ownership, the concrete-poetry
// protection language, and the approved contact email. Do not add
// back a mailing address or phone number — none has been approved for
// publication.

export const metadata = {
  title: 'Copyright',
  description: 'Copyright and intellectual-property notice for AwakenArts.com.',
}

export default function CopyrightPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">

        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Legal</p>

        <h1 className="legal-page__heading">Copyright</h1>

        <p className="legal-page__body">
          AwakenArts is operated by Susan Ann Shepler, a Texas sole proprietor.
        </p>

        <h2 className="legal-page__subheading">Ownership and Authorship</h2>
        <p className="legal-page__body">
          Copyrightable poems, written material, original artwork, branding, editorial selection,
          arrangement, editing, compilations, Figure Editions, Companions, slides, and other
          human-authored elements on this website are owned by Susan Ann Shepler and/or AwakenArts
          or used with permission, unless otherwise identified.
        </p>
        <p className="legal-page__body">
          Some visual elements may be created or developed with artificial-intelligence tools.
          AwakenArts maintains internal provenance records and claims rights only to the extent
          available under applicable law, including rights in human-authored text, paintings,
          selection, arrangement, editing, compositing, modification, and compilation.
        </p>

        <h2 className="legal-page__subheading">Restrictions</h2>
        <p className="legal-page__body">
          Except where an express written license states otherwise, no content may be reproduced,
          downloaded, scraped, republished, modified, distributed, sold, sublicensed, publicly
          displayed, used to train an artificial-intelligence system, or incorporated into another
          product or service.
        </p>
        <p className="legal-page__body">
          Purchasing a product transfers ownership of the physical copy, if any, but does not
          transfer copyright or unrestricted reproduction rights.
        </p>

        <h2 className="legal-page__subheading">Concrete Poetry</h2>
        <p className="legal-page__body">
          The wording, line breaks, spacing, arrangement, and concrete shape of each poem are
          integral to the work and may not be altered or reconstructed without written permission.
        </p>

        <h2 className="legal-page__subheading">Permission and Notices</h2>
        <p className="legal-page__body">
          For permission requests or a good-faith copyright concern, contact{' '}
          <a href="mailto:susan@shepler.us" className="legal-page__link">susan@shepler.us</a>{' '}
          and identify the work, location, requested use, and your contact information.
        </p>

        <p className="legal-page__body">
          Copyright &copy; 2026 Susan Ann Shepler / AwakenArts. All rights reserved.
        </p>

        <p className="legal-page__body legal-page__body--fine">
          Effective date: July 15, 2026
        </p>

      </main>
    </>
  )
}
