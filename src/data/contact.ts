// Contact settings (2026-10-18, Susan).
//
// info@awakenarts.com is shown in full only on /contact, to keep it away
// from address-harvesting bots. Everywhere else, visitors reach Susan
// through the contact form or a link to /contact.
//
// The contact form submits to Web3Forms (free plan). The recipient address
// is NOT in this code: it is bound to the access key on Web3Forms' side, so
// the key alone decides where messages go. The key is read from the
// environment variable NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (in .env.local for
// localhost, and in Vercel → Settings → Environment Variables for the live
// site). Web3Forms' free plan requires submissions from the visitor's
// browser, so the key is necessarily visible in the page; it reveals no
// address and can only send to the one inbox it was created for.
//
// Spam protection: hCaptcha (Web3Forms' shared free-plan site key, which
// Web3Forms verifies on its side; must also be switched on for the form in
// the Web3Forms dashboard) plus the `botcheck` honeypot.
export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''

/** Web3Forms' free-plan hCaptcha site key (custom keys are a paid feature). */
export const WEB3FORMS_HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'

/**
 * The form appears once the access key is set. Without it, it still shows
 * at localhost (for review, with a clear "not connected" message on send);
 * on the live site, sections fall back to a link to /contact.
 */
export const CONTACT_FORM_LIVE =
  WEB3FORMS_ACCESS_KEY !== '' || process.env.NODE_ENV !== 'production'
