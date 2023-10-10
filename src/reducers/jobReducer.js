// src/reducers/jobReducer.js
import {FETCH_JOBS_SUCCESS, FETCH_JOB_SUCCESS} from '../actions/types'
// Import other action types as needed from '../actions/types'

// Initial state for the job-related data
const initialState = {
  jobs: [], // List of jobs
  selectedJob: null, // Selected job details
}

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload, // Update the list of jobs
      }
    case FETCH_JOB_SUCCESS:
      return {
        ...state,
        selectedJob: action.payload, // Update the selected job details
      }
    default:
      return state
  }
}

export default jobReducer
