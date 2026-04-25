import { PageHeader } from '../components/PageHeader'
import { OPERATING_STATEMENT, SITE } from '../constants/site'
import './ContentPage.css'

export function Legal() {
  return (
    <div className="content-page">
      <div className="content-page__inner">
        <PageHeader
          title="Legal & verification"
          intro="Public reference and business verification details for the trust and its institution."
        />
        <p className="content-section__em" style={{ marginTop: 0, marginBottom: '1.5rem' }}>
          {OPERATING_STATEMENT}
        </p>
        <dl className="legal-dl">
          <dt>Legal name</dt>
          <dd>{SITE.trustName}</dd>
          <dt>Institution</dt>
          <dd>{SITE.collegeName}</dd>
          <dt>GSTIN</dt>
          <dd>33AAJTS2687J1ZZ</dd>
          <dt>Udyam</dt>
          <dd>UDYAM-TN-12-0036920</dd>
          <dt>Business type</dt>
          <dd>Trust</dd>
          <dt>Enterprise type</dt>
          <dd>Small</dd>
          <dt>Industry</dt>
          <dd>Education</dd>
          <dt>Address</dt>
          <dd>73-A, VRS Building, DD Road, Arappalayam, Madurai - 625016</dd>
          <dt>Additional location</dt>
          <dd>Vadapalanji, Madurai - 625021</dd>
          <dt>Established</dt>
          <dd>27/01/2010</dd>
        </dl>
        <p className="legal-block">
          <strong>Statement.</strong> This website represents the registered entity {SITE.trustName}{' '}
          and its educational institution {SITE.collegeName} for public reference and business
          verification.
        </p>
        <p className="legal-block" style={{ marginTop: '1.25rem' }}>
          {OPERATING_STATEMENT}
        </p>
      </div>
    </div>
  )
}
