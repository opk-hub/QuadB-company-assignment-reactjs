import {Link} from 'react-router-dom'
import './styles/JobDetail.css'

const JobDetail = ({location}) => {
  const description = decodeURIComponent(
    location.search.replace('?description=', ''),
  )

  return (
    <div className="job-detail-container">
      <center>
        <h2 className="job-detail-heading">Company Details</h2>
        <p className="job-description">Description: {description}</p>

        <Link to="/apply/:company_name">
          <button className="apply-button" type="button">
            Apply this job
          </button>
          <br />
        </Link>
        <button
          className="back-button"
          type="button"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </center>
    </div>
  )
}

export default JobDetail
