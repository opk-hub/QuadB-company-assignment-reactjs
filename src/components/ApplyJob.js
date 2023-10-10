import {useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import './styles/ApplyJob.css'

function ApplyJob() {
  const {title} = useParams()

  const history = useHistory()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resume: null,
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    setFormData({
      ...formData,
      resume: file,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    history.push('/success')
  }

  return (
    <div>
      <center>
        <h2>Apply for the Job</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="coverLetter">Cover Letter:</label> <br />
            <textarea
              id="coverLetter"
              name="coverLetter"
              className="textarea"
              value={formData.coverLetter}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="resume">Resume:</label> <br />
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
            />
            {title}
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </center>
    </div>
  )
}

export default ApplyJob
