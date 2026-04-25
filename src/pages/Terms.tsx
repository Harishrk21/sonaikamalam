import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { OPERATING_STATEMENT, SITE } from '../constants/site'
import './ContentPage.css'

const effectiveDate = '25/04/2026'

export function Terms() {
  return (
    <div className="content-page">
      <div className="content-page__inner content-page--legal">
        <PageHeader
          title="Terms of Service"
          intro="Please read these terms carefully before using this website."
        />

        <p className="legal-block" style={{ marginBottom: '1rem' }}>
          <strong>Effective Date:</strong> {effectiveDate}
        </p>

        <p className="content-section__em" style={{ marginTop: 0, marginBottom: '1.5rem' }}>
          {OPERATING_STATEMENT}
        </p>

        <section className="policy-section">
          <h2 className="content-section__title">1. About Us</h2>
          <p className="content-section__text">
            This website is operated by <strong>{SITE.trustName}</strong>, an educational trust based in
            Madurai, Tamil Nadu.
          </p>
          <p className="content-section__text">The trust operates its institution:</p>
          <p className="legal-block">
            <strong>{SITE.collegeName}</strong>, which functions as an official educational unit under
            the trust.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">2. Use of Website</h2>
          <p className="content-section__text">
            You agree to use this website only for lawful purposes.
          </p>
          <p className="content-section__text">You must not:</p>
          <ul className="content-list">
            <li>Provide false or misleading information</li>
            <li>Attempt unauthorized access to the website</li>
            <li>Misuse the website for illegal or harmful activities</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">3. Information Accuracy</h2>
          <p className="content-section__text">
            The information provided on this website is for general informational purposes.
          </p>
          <p className="content-section__text">While we strive to keep information accurate:</p>
          <ul className="content-list">
            <li>Educational details may change</li>
            <li>Services and offerings may be updated</li>
            <li>We do not guarantee completeness at all times</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">4. Communication</h2>
          <p className="content-section__text">
            By submitting your details, you agree that we may contact you via:
          </p>
          <ul className="content-list">
            <li>Phone</li>
            <li>Email</li>
            <li>WhatsApp</li>
          </ul>
          <p className="content-section__text">for purposes including:</p>
          <ul className="content-list">
            <li>Admission enquiries</li>
            <li>Academic updates</li>
            <li>Institutional communication</li>
            <li>Support and follow-up</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">5. Limitation of Liability</h2>
          <p className="content-section__text">
            {SITE.trustName} shall not be held liable for:
          </p>
          <ul className="content-list">
            <li>Errors or omissions in content</li>
            <li>Temporary unavailability of the website</li>
            <li>Technical issues beyond our control</li>
            <li>Any loss arising from use of the website</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">6. Intellectual Property</h2>
          <p className="content-section__text">
            All website content including text, design, and branding belongs to:
          </p>
          <p className="legal-block">
            <strong>{SITE.trustName}</strong>
          </p>
          <p className="content-section__text">Unauthorized use is prohibited.</p>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">7. External Links</h2>
          <p className="content-section__text">
            This website may contain links to third-party websites. We are not responsible for their
            content or policies.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">8. Modifications</h2>
          <p className="content-section__text">
            We reserve the right to update or modify these Terms at any time without prior notice.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">9. Governing Law</h2>
          <p className="content-section__text">These terms are governed by the laws of India.</p>
          <p className="content-section__text">
            <strong>Jurisdiction:</strong> Madurai, Tamil Nadu
          </p>
        </section>

        <section className="policy-section">
          <h2 className="content-section__title">10. Contact</h2>
          <p className="content-section__text">For any questions regarding these terms:</p>
          <p className="legal-block">
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
          <h2 className="content-section__title">11. Entity Clarification</h2>
          <p className="content-section__text">This website represents:</p>
          <p className="legal-block">
            <strong>{SITE.trustName}</strong>
          </p>
          <p className="content-section__text">and its educational institution:</p>
          <p className="legal-block">
            <strong>{SITE.collegeName}</strong>, which operates under the trust.
          </p>
          <p className="content-section__em">{OPERATING_STATEMENT}</p>
        </section>

        <p className="content-section__text" style={{ marginTop: '2rem' }}>
          For privacy practices, see the{' '}
          <Link to="/privacy" className="inline-link">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
