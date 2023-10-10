import {useState} from 'react'
import {Link} from 'react-router-dom'
import './LoginForm.css'

function LoginForm({handleLogin}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    handleLogin(username, password)
  }

  return (
    <div className="login-form">
      <h2 className="mb-5">Login form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/searching_page">
          <button type="submit" className="button">
            Login
          </button>
        </Link>
      </form>
    </div>
  )
}

export default LoginForm
