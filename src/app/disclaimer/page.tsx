import Nav from '@/components/Nav'

// Replaced 2026-07-15 per the AwakenArts Legal and Risk Standards
// package, Stage 1 item 4 of the Controlled Remediation Directive: the
// prior version was generic "blog"/"authors" template boilerplate
// ending in a flat US $1 liability cap -- exactly the language the
// standard instructs not to carry forward. This is the approved
// Educational and Non-Clinical Disclaimer draft from
// `02-Website-Legal-Documents.md`, Section A, verbatim except for its
// two placeholders ([BUSINESS EMAIL], [MONTH DAY, YEAR]), which are
// filled with Susan's approved interim facts: susan@shepler.us and an
// effective date of July 15, 2026. No liability-limitation language
// appears here -- that remains attorney-review-gated per the standard
// and is not part of this page.

export const metadata = {
  title: 'Disclaimer',
  description: 'Educational and non-clinical disclaimer for AwakenArts.com.',
}

export default function DisclaimerPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">

        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Legal</p>

        <h1 className="legal-page__heading">Disclaimer</h1>

        <h2 className="legal-page__subheading">About AwakenArts</h2>
        <p className="legal-page__body">
          AwakenArts is operated by Susan Ann Shepler, a Texas sole proprietor. AwakenArts provides
          artistic, literary, educational, and reflective materials and experiences. Its website,
          Figure Editions, Companions, presentation slides, workshops, and related resources invite
          attention, conversation, and personal reflection through image and language.
        </p>

        <h2 className="legal-page__subheading">Not Counseling or Professional Care</h2>
        <p className="legal-page__body">
          AwakenArts does not provide counseling, psychotherapy, mental-health assessment,
          diagnosis, treatment, crisis intervention, medical advice, legal advice, financial advice,
          or any other licensed professional service. Use of this website, purchase or use of an
          AwakenArts product, or participation in an AwakenArts workshop does not establish a
          therapist-client, counselor-client, healthcare-provider, supervisory, fiduciary, or other
          professional relationship with Susan Ann Shepler or AwakenArts.
        </p>

        <h2 className="legal-page__subheading">Symbolic and Reflective Material</h2>
        <p className="legal-page__body">
          Images, poems, questions, prompts, themes, and facilitator observations are invitations to
          artistic and personal reflection. They are not clinical interpretations, assessments,
          diagnoses, or statements of fact about any reader or participant. Readers and participants
          are free to accept, reject, reinterpret, or decline any prompt.
        </p>

        <h2 className="legal-page__subheading">No Guaranteed Outcome</h2>
        <p className="legal-page__body">
          AwakenArts does not promise or guarantee any particular personal, emotional, spiritual,
          educational, professional, financial, or workshop result. Experiences vary according to
          the person, group, facilitator, setting, and manner of use.
        </p>

        <h2 className="legal-page__subheading">Personal Responsibility and Professional Assistance</h2>
        <p className="legal-page__body">
          Readers and participants remain responsible for their own choices, participation, and use
          of the materials. Anyone who needs mental-health care, medical care, crisis assistance,
          legal advice, financial advice, or another professional service should consult an
          appropriately qualified and licensed provider. AwakenArts is not an emergency or crisis
          service.
        </p>

        <h2 className="legal-page__subheading">External Resources</h2>
        <p className="legal-page__body">
          Links to third-party websites or services are provided for convenience or reference.
          AwakenArts does not control and is not responsible for their content, availability,
          privacy practices, terms, or services. A link does not necessarily constitute endorsement.
        </p>

        <h2 className="legal-page__subheading">Contact</h2>
        <p className="legal-page__body">
          Questions concerning this Disclaimer may be sent to{' '}
          <a href="mailto:susan@shepler.us" className="legal-page__link">susan@shepler.us</a>.
        </p>

        <p className="legal-page__body legal-page__body--fine">
          Effective date: July 15, 2026
        </p>

      </main>
    </>
  )
}
