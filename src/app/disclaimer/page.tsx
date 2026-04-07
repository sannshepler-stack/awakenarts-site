import Nav from '@/components/Nav'

export const metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for AwakenArts.com products, services, and website content.',
}

export default function DisclaimerPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">

        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Legal</p>

        <h1 className="legal-page__heading">Disclaimer</h1>

        <p className="legal-page__body">
          By using this website and or blog, or making a purchase, user agrees as follows:
        </p>

        <p className="legal-page__body">
          The information, services and products are sold or given to the user with the understanding
          that neither the author, seller, nor publisher is engaged in rendering any legal, business
          or financial advice to the purchaser or to the general public. The views and opinions
          expressed are those of the authors and do not necessarily reflect the official policy or
          position of AwakenArts.com. Any content provided by our bloggers or authors are of their
          opinion, and are not intended to malign any religion, ethnic group, club, organization,
          company, individual or anyone or anything.
        </p>

        <p className="legal-page__body">
          Although we make strong efforts to make sure our information is accurate, AwakenArts.com
          cannot guarantee that all the information on this website and or blog is always correct,
          complete, or up-to-date.
        </p>

        <p className="legal-page__body">
          By purchasing any of our products or services, user agrees to and is knowingly assuming
          any and all risk associated with using these products or services.
        </p>

        <p className="legal-page__body legal-page__body--caps">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE PRODUCTS, SERVICES AND INFORMATION ON THIS
          WEBSITE AND OR BLOG IS PROVIDED &quot;AS IS&quot; AND WITH ALL FAULTS AND AWAKENARTS.COM MAKES NO
          PROMISES, REPRESENTATIONS, OR WARRANTIES, EITHER EXPRESS, IMPLIED, STATUTORY, OR
          OTHERWISE, WITH RESPECT TO THE PRODUCTS, SERVICES AND INFORMATION, INCLUDING ITS
          CONDITION, ITS CONFORMITY TO ANY REPRESENTATION OR DESCRIPTION, OR THE EXISTENCE OF ANY
          LATENT OR PATENT DEFECTS, AND AWAKENARTS.COM SPECIFICALLY DISCLAIMS ALL IMPLIED (IF ANY)
          WARRANTIES OF TITLE, MERCHANTABILITY, NONINFRINGEMENT, FITNESS FOR A PARTICULAR PURPOSE,
          LACK OF VIRUSES, ACCURACY OR COMPLETENESS, QUIET ENJOYMENT, AND QUIET POSSESSION. THE
          ENTIRE RISK ARISING OUT OF USE OR PERFORMANCE OF THE PRODUCTS, SERVICES AND INFORMATION
          LIES WITH USER.
        </p>

        <p className="legal-page__body legal-page__body--caps">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AWAKENARTS.COM OR ITS
          SUPPLIERS BE LIABLE FOR CONSEQUENTIAL, INCIDENTAL, SPECIAL, INDIRECT, OR EXEMPLARY
          DAMAGES WHATSOEVER ARISING OUT OF OR IN ANY WAY RELATING TO THIS AGREEMENT OR
          USER&apos;S USE OF OR INABILITY TO USE THE PRODUCTS, SERVICES AND INFORMATION, OR THE
          PROVISION OR FAILURE TO PROVIDE SUPPORT SERVICES, INCLUDING, BUT NOT LIMITED TO, LOST
          PROFITS, LOSS OF CONFIDENTIAL OR OTHER INFORMATION, BUSINESS INTERRUPTION, PERSONAL
          INJURY, LOSS OF PRIVACY, FAILURE TO MEET ANY DUTY (INCLUDING OF GOOD FAITH OR REASONABLE
          CARE), NEGLIGENCE, COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER
          CLAIM FOR PECUNIARY OR OTHER LOSS WHATSOEVER, OR FOR ANY CLAIM OR DEMAND AGAINST USER BY
          ANY OTHER PARTY, EVEN IF AWAKENARTS.COM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES. THESE LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE
          OF ANY LIMITED REMEDY.
        </p>

        <p className="legal-page__body legal-page__body--caps">
          NOTWITHSTANDING ANY DAMAGES USER MAY INCUR FOR ANY REASON WHATSOEVER (INCLUDING, WITHOUT
          LIMITATION, ALL DAMAGES REFERENCED ABOVE AND ALL DIRECT OR GENERAL DAMAGES), THE ENTIRE
          LIABILITY OF AWAKENARTS.COM AND ANY OF ITS SUPPLIERS UNDER ANY PROVISION OF THIS
          AGREEMENT AND YOUR EXCLUSIVE REMEDY FOR ALL OF THE FOREGOING SHALL BE LIMITED TO THE
          GREATER OF THE AMOUNT ACTUALLY PAID FOR THE PRODUCTS, SERVICES AND INFORMATION OR U.S.
          $1. THE FOREGOING LIMITATIONS, EXCLUSIONS, AND DISCLAIMERS SHALL APPLY TO THE MAXIMUM
          EXTENT PERMITTED BY APPLICABLE LAW, EVEN IF ANY REMEDY FAILS ITS ESSENTIAL PURPOSE.
        </p>

        <p className="legal-page__body">
          If any provision of this Agreement is declared invalid or unenforceable, the remaining
          provisions of this Agreement will remain in effect. AwakenArts.com has the right to
          modify these terms and conditions at any time.
        </p>

        <p className="legal-page__body legal-page__body--fine">
          This disclaimer is protected under United States and foreign copyrights. The copying,
          redistribution, use or publication by you, is strictly prohibited.
        </p>

      </main>
    </>
  )
}
