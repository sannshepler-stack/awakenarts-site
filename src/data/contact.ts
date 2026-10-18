// Contact settings (2026-10-18, Susan).
//
// info@awakenarts.com is shown in full only on /contact, to keep it away
// from address-harvesting bots. Everywhere else, visitors reach Susan
// through the contact form or a link to /contact.
//
// FORMSPREE_FORM_ID is the short code at the end of the form's endpoint in
// the Formspree dashboard (https://formspree.io/f/<FORM_ID>). It is public
// by design. Until it is filled in, the form shows only in local
// development (for review at localhost); on the live site, sections fall
// back to a link to /contact.
export const FORMSPREE_FORM_ID = ''

export const CONTACT_FORM_LIVE =
  FORMSPREE_FORM_ID !== '' || process.env.NODE_ENV !== 'production'
