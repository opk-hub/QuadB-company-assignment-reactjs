import {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class JobList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobs: [],
      isRemoteChecked: false,
    }
  }

  async componentDidMount() {
    const {location} = this.props
    const isRemote = new URLSearchParams(location.search).get('remote')

    if (isRemote === 'true') {
      this.setState({isRemoteChecked: true})
    }

    if (isRemote) {
      try {
        const response = await axios.get(
          `https://www.arbeitnow.com/api/job-board-api?title=${isRemote}`,
        )
        if (response.status === 200) {
          const {data} = response
          this.setState({jobs: data.data})
          console.log(data)
        } else {
          // Handle error response here
          throw new Error('Failed to fetch data')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({isRemoteChecked: !prevState.isRemoteChecked}))
  }

  render() {
    const {jobs, isRemoteChecked} = this.state

    return (
      <div>
        <h2>Company List</h2>
        <label>
          <input
            type="checkbox"
            checked={isRemoteChecked}
            onChange={this.handleCheckboxChange}
            className="checkbox mb-5"
          />
          Remote Jobs
        </label>
        <ul>
          {Array.isArray(jobs) && jobs.length > 0 ? (
            jobs
              .filter(job => (isRemoteChecked ? job.remote === true : true))
              .map(job => (
                <li key={job.id}>
                  <Link
                    to={`/jobs/${job.id}?description=${encodeURIComponent(
                      job.description,
                    )}`}
                  >
                    {job.company_name}
                  </Link>
                </li>
              ))
          ) : (
            <li>No job listings found.</li>
          )}
        </ul>
      </div>
    )
  }
}

export default JobList
