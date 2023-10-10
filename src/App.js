import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import LandingPage from './components/LandingPage'
import JobList from './components/JobList'
import JobDetail from './components/JobDetail'
import ApplyJob from './components/ApplyJob'
import SuccessPage from './components/SuccessPage'
import LoginForm from './components/Auth/LoginForm'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/searching_page" exact component={LandingPage} />
          <Route path="/jobs" exact component={JobList} />
          <Route path="/jobs/:job_detail" component={JobDetail} />
          <Route path="/apply/:company_name" component={ApplyJob} />
          <Route path="/success" component={SuccessPage} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
