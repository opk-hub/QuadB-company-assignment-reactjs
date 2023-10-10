import {Link} from 'react-router-dom'
import './styles/SuccessPage.css'

function SuccessPage() {
  return (
    <div className="sucess-container">
      <h2>Application Submitted Successfully</h2>
      <p>Your application has been submitted.My Team contact You Later!!!!</p>

      <p>Keep Searching the job</p>

      <Link to="/searching_page">Back to Home</Link>
    </div>
  )
}

export default SuccessPage
