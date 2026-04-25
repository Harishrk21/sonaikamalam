import { PageHeader } from '../components/PageHeader'
import { OPERATING_STATEMENT, SITE } from '../constants/site'
import './ContentPage.css'

const email = 'ravindran@smgpl.in'

export function Contact() {
  return (
    <div className="content-page">
      <div className="content-page__inner">
        <PageHeader
          title="Contact"
          intro={`Correspondence for ${SITE.trustName} and ${SITE.collegeName}.`}
        />
        <p className="content-section__em" style={{ marginTop: 0, marginBottom: '1.5rem' }}>
          {OPERATING_STATEMENT}
        </p>
        <h2 className="content-section__title" style={{ marginTop: 0, fontSize: '1.1rem' }}>
          Registered address
        </h2>
        <p className="content-section__text">
          73-A, VRS Building, DD Road, Arappalayam, Madurai - 625016
        </p>
        <p className="content-section__text" style={{ marginTop: 0 }}>
          Additional location: Vadapalanji, Madurai - 625021
        </p>
        <h2
          className="content-section__title"
          style={{ fontSize: '1.1rem', marginTop: '1.75rem' }}
        >
          Phone
        </h2>
        <p className="content-section__text">
          <a href="tel:+919361223339" className="inline-link">
            9361223339
          </a>
        </p>
        <h2
          className="content-section__title"
          style={{ fontSize: '1.1rem', marginTop: '1.75rem' }}
        >
          Email
        </h2>
        <p className="content-section__text">
          <a href={`mailto:${email}`} className="inline-link">
            {email}
          </a>
        </p>
        <p className="content-section__text" style={{ marginTop: '1.5rem' }}>
          {OPERATING_STATEMENT}
        </p>
      </div>
    </div>
  )
}
