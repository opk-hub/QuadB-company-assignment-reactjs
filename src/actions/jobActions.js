// src/actions/jobActions.js
import axios from 'axios' // You will need to install Axios as a dependency

// Action types
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS'
export const FETCH_JOB_SUCCESS = 'FETCH_JOB_SUCCESS'

// Action creators
export const fetchJobsSuccess = jobs => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
})

export const fetchJobSuccess = job => ({
  type: FETCH_JOB_SUCCESS,
  payload: job,
})

// Async action creator to fetch jobs by language
export const fetchJobsByLanguage = language => async dispatch => {
  try {
    const response = await axios.get(
      `https://www.arbeitnow.com/api/job-board-api?language=${language}`,
    )
    const jobs = response.data // Assuming the API response is in JSON format
    dispatch(fetchJobsSuccess(jobs))
  } catch (error) {
    console.error('Error fetching jobs:', error)
    // You can dispatch an error action here if needed
  }
}

// Async action creator to fetch a job by ID
export const fetchJobById = jobId => async dispatch => {
  try {
    const response = await axios.get(
      `https://www.arbeitnow.com/api/job-board-api/${jobId}`,
    )
    const job = response.data
    dispatch(fetchJobSuccess(job))
  } catch (error) {
    console.error('Error fetching job by ID:', error)
    // You can dispatch an error action here if needed
  }
}
