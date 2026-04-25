import { Link } from 'react-router-dom'
import { OPERATING_STATEMENT } from '../constants/site'
import './ContentPage.css'

export function NotFound() {
  return (
    <div className="content-page">
      <div className="content-page__inner" style={{ textAlign: 'center' }}>
        <h1 className="content-section__title" style={{ fontSize: '1.5rem' }}>
          Page not found
        </h1>
        <p className="content-section__text" style={{ margin: '0 auto 1.5rem' }}>
          The page you requested does not exist.{' '}
          <Link to="/" className="inline-link">
            Return to home
          </Link>
          .
        </p>
        <p className="content-section__em" style={{ margin: '0 auto', maxWidth: '36rem' }}>
          {OPERATING_STATEMENT}
        </p>
      </div>
    </div>
  )
}
