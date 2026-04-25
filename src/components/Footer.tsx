import { Link } from 'react-router-dom'
import { OPERATING_STATEMENT, SITE } from '../constants/site'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__block">
          <p className="site-footer__name">{SITE.trustName}</p>
          <p className="site-footer__op">Operating Institution: {SITE.collegeName}</p>
        </div>
        <p className="site-footer__statement" aria-label="Official operating relationship">
          {OPERATING_STATEMENT}
        </p>
        <div className="site-footer__ids">
          <p>
            <span className="site-footer__label">GSTIN:</span> 33AAJTS2687J1ZZ
          </p>
          <p>
            <span className="site-footer__label">Udyam:</span> UDYAM-TN-12-0036920
          </p>
        </div>
        <nav className="site-footer__legal" aria-label="Footer legal links">
          <Link to="/legal">Legal &amp; Verification</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </nav>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {SITE.trustName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
