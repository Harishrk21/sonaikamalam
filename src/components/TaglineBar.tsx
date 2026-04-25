import { OPERATING_STATEMENT } from '../constants/site'
import './TaglineBar.css'

export function TaglineBar() {
  return (
    <div className="tagline-bar" role="note">
      <p className="tagline-bar__text">{OPERATING_STATEMENT}</p>
    </div>
  )
}
