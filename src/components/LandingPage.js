import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './styles/LandingPage.css'

function LandingPage() {
  const [language, setLanguage] = useState('')
  const [isRemote, setIsRemote] = useState(false) // Add state for "remote"
  const history = useHistory()

  const handleSearch = () => {
    const remoteQueryParam = isRemote ? 'true' : 'false' // Convert isRemote to a query parameter
    history.push(`/jobs?language=${language}&remote=${remoteQueryParam}`)
  }

  return (
    <div className="center-content">
      <h1 className="mb-5 job">Job Portal</h1>
      <input
        type="text"
        placeholder="Enter programming language"
        value={language}
        onChange={e => setLanguage(e.target.value)}
        className="mt-5"
      />
      <label className="mt-3">
        <input
          type="checkbox"
          checked={isRemote}
          className="checkbox"
          onChange={() => setIsRemote(!isRemote)}
        />
        Remote Jobs
      </label>
      <button type="button" className="button mt-5" onClick={handleSearch}>
        Search Jobs
      </button>
    </div>
  )
}

export default LandingPage
