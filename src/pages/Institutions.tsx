import { PageHeader } from '../components/PageHeader'
import { OPERATING_STATEMENT, SITE } from '../constants/site'
import './ContentPage.css'

export function Institutions() {
  return (
    <div className="content-page">
      <div className="content-page__inner">
        <PageHeader
          title="Institutions"
          intro="Official education unit under the trust."
        />
        <h2 className="content-section__title" style={{ marginTop: 0 }}>
          {SITE.collegeName}
        </h2>
        <p className="content-section__em" style={{ marginBottom: '1.5rem' }}>
          {OPERATING_STATEMENT}
        </p>
        <p className="content-section__text">
          {SITE.collegeName} is an educational institution operated by {SITE.trustName}.
        </p>
        <p className="content-section__text">The institution provides:</p>
        <ul className="content-list">
          <li>Higher education in arts and science streams</li>
          <li>Academic tutoring and student support</li>
          <li>Examination preparation guidance</li>
          <li>Educational development services</li>
        </ul>
        <p className="content-section__text" style={{ marginTop: '1.25rem' }}>
          {OPERATING_STATEMENT}
        </p>
      </div>
    </div>
  )
}
