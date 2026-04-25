import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { OPERATING_STATEMENT, SITE } from '../constants/site'
import './ContentPage.css'

const effectiveDate = '25/04/2026'

export function Privacy() {
  return (
    <div className="content-page">
      <div className="content-page__inner content-page--legal">
        <PageHeader
          title="Privacy Policy"
          intro="How Sonai Kamalam Educational Trust collects, uses, and protects user information."
        />

        <p className="legal-block" style={{ marginBottom: '1rem' }}>
          <strong>Effective Date:</strong> {effectiveDate}
        </p>

        <p className="content-section__text">
          This Privacy Policy describes how <strong>{SITE.trustName}</strong> ("we", "our", "us")
          collects, uses, and protects the information of users who interact with our website and
          services.
        </p>
        <p className="content-section__text">
          <strong>{SITE.trustName}</strong> operates its educational institution,{' '}
          <strong>{SITE.collegeName}</strong>, and this policy applies to all interactions related to
          both the trust and its institution.
        </p>

        <p className="content-section__em" style={{ marginTop: 0, marginBottom: '1.5rem' }}>
          {OPERATING_STATEMENT}
        </p>

        <section className="policy-section">
          <h2 className="content-section__title">1. Information We Collect</h2>
          <p className="content-section__text">We may collect the following information:</p>
          <ul className="content-list">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Enquiry details (admission, courses, general enquiries)</li>
            <li>Messages submitted through contact forms</li>
            <li>Communication details shared via phone, email, or WhatsApp</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">2. How We Collect Information</h2>
          <p className="content-section__text">We collect information through:</p>
          <ul className="content-list">
            <li>Website contact forms</li>
            <li>Direct enquiries (phone, email, in-person)</li>
            <li>WhatsApp communication</li>
            <li>Any interaction with our educational services</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">3. How We Use Your Information</h2>
          <p className="content-section__text">We use the collected information for:</p>
          <ul className="content-list">
            <li>Responding to enquiries</li>
            <li>Providing admission-related information</li>
            <li>Sharing academic updates</li>
            <li>Communicating about educational services</li>
            <li>Sending important administrative updates</li>
            <li>Improving our services and communication</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">4. WhatsApp Communication</h2>
          <p className="content-section__text">
            We may use <strong>WhatsApp Business communication</strong> to contact users for:
          </p>
          <ul className="content-list">
            <li>Admission enquiries</li>
            <li>Academic updates</li>
            <li>Institutional notifications</li>
            <li>Support and follow-up communication</li>
          </ul>
          <p className="content-section__text">
            We ensure that communication is relevant and related to our educational services.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">5. Data Sharing</h2>
          <p className="content-section__text">
            We do <strong>not sell or rent</strong> personal information.
          </p>
          <p className="content-section__text">We may share information only:</p>
          <ul className="content-list">
            <li>With authorized staff of the trust and institution</li>
            <li>With service providers assisting in operations (if required)</li>
            <li>When required by law or legal authorities</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">6. Data Protection</h2>
          <p className="content-section__text">
            We take reasonable steps to protect your information from:
          </p>
          <ul className="content-list">
            <li>Unauthorized access</li>
            <li>Misuse</li>
            <li>Disclosure</li>
          </ul>
          <p className="content-section__text">
            However, no method of transmission over the internet is completely secure.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">7. User Rights</h2>
          <p className="content-section__text">Users may request:</p>
          <ul className="content-list">
            <li>Access to their data</li>
            <li>Correction of incorrect data</li>
            <li>Deletion of their information</li>
          </ul>
          <p className="content-section__text">Requests can be made via email.</p>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">8. Contact Information</h2>
          <p className="legal-block">
            <strong>{SITE.trustName}</strong>
            <br />
            Email:{' '}
            <a href="mailto:ravindran@smgpl.in" className="inline-link">
              ravindran@smgpl.in
            </a>
            <br />
            Phone:{' '}
            <a href="tel:+919361223339" className="inline-link">
              9361223339
            </a>
          </p>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">9. Updates to This Policy</h2>
          <p className="content-section__text">
            We may update this Privacy Policy from time to time. Changes will be reflected on this page.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">10. Entity Clarification</h2>
          <p className="content-section__text">
            This website represents <strong>{SITE.trustName}</strong>, and its educational institution:
          </p>
          <p className="legal-block">
            <strong>{SITE.collegeName}</strong>, which operates as an official unit under the trust.
          </p>
          <p className="content-section__em">{OPERATING_STATEMENT}</p>
        </section>

        <p className="content-section__text" style={{ marginTop: '2rem' }}>
          For terms of use, see{' '}
          <Link to="/terms" className="inline-link">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
