import { Link } from 'react-router-dom'
import { OPERATING_STATEMENT, SITE } from '../constants/site'
import './ContentPage.css'
import './Home.css'

export function Home() {
  return (
    <div className="content-page home">
      <section className="home__hero" aria-labelledby="hero-heading">
        <div className="content-page__inner home__hero-inner">
          <p className="home__kicker">Registered educational trust · Madurai, Tamil Nadu</p>
          <h1 id="hero-heading" className="home__headline">
            {SITE.trustName}
          </h1>
          <p className="home__sub">{SITE.tagline}</p>
          <p className="home__statement" role="status">
            {OPERATING_STATEMENT}
          </p>
          <p className="home__lede">
            {SITE.trustName} is a registered educational trust based in Madurai, Tamil Nadu, dedicated
            to promoting higher education and academic development.
          </p>
          <p className="home__lede">
            The trust operates its educational institution, <strong>{SITE.collegeName}</strong>, which
            provides structured higher education and student-focused learning programs.
          </p>

          <div className="home__highlights" aria-label="Verification highlights">
            <article className="home__highlight-card">
              <h2>Established</h2>
              <p>27/01/2010</p>
            </article>
            <article className="home__highlight-card">
              <h2>Business Type</h2>
              <p>Trust · Education</p>
            </article>
            <article className="home__highlight-card">
              <h2>Official Institution</h2>
              <p>{SITE.collegeName}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section" aria-labelledby="relation-heading">
        <div className="content-page__inner">
          <h2 id="relation-heading" className="content-section__title">
            Our Educational Institution
          </h2>
          <p className="content-section__text">
            As part of its mission to support higher education, {SITE.trustName} manages and operates{' '}
            <strong>{SITE.collegeName}</strong>, an academic institution located in Madurai.
          </p>
          <p className="content-section__text">
            The college functions as an official educational unit under the trust, delivering programs in
            arts, science, and related disciplines.
          </p>
          <p className="content-section__em">{OPERATING_STATEMENT}</p>
        </div>
      </section>

      <section className="content-section content-section--alt" aria-labelledby="about-heading">
        <div className="content-page__inner">
          <h2 id="about-heading" className="content-section__title">
            About the Trust
          </h2>
          <p className="content-section__text">
            {SITE.trustName} is an educational organization established in 2010 in Madurai, Tamil Nadu.
          </p>
          <p className="content-section__text">The trust focuses on:</p>
          <ul className="content-list">
            <li>Promoting higher education</li>
            <li>Supporting academic growth</li>
            <li>Providing educational services and programs</li>
            <li>Managing institutions that deliver structured learning</li>
          </ul>
        </div>
      </section>

      <section className="content-section" aria-labelledby="verification-heading">
        <div className="content-page__inner">
          <h2 id="verification-heading" className="content-section__title">
            Verification Profile
          </h2>
          <div className="home__verification-grid">
            <div className="home__verification-item">
              <span>Legal Name</span>
              <strong>{SITE.trustName}</strong>
            </div>
            <div className="home__verification-item">
              <span>Institution</span>
              <strong>{SITE.collegeName}</strong>
            </div>
            <div className="home__verification-item">
              <span>GSTIN</span>
              <strong>33AAJTS2687J1ZZ</strong>
            </div>
            <div className="home__verification-item">
              <span>Udyam</span>
              <strong>UDYAM-TN-12-0036920</strong>
            </div>
            <div className="home__verification-item">
              <span>Address</span>
              <strong>73-A, VRS Building, DD Road, Arappalayam, Madurai - 625016</strong>
            </div>
            <div className="home__verification-item">
              <span>Additional Location</span>
              <strong>Vadapalanji, Madurai - 625021</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" aria-label="Next steps">
        <div className="content-page__inner home__cta">
          <p>
            <Link to="/institutions" className="text-link">
              View Institution
            </Link>
            {' · '}
            <Link to="/legal" className="text-link">
              Legal &amp; Verification
            </Link>
            {' · '}
            <Link to="/privacy" className="text-link">
              Privacy Policy
            </Link>
            {' · '}
            <Link to="/terms" className="text-link">
              Terms of Service
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
