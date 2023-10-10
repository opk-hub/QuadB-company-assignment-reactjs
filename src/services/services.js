// src/services/services.js
import axios from 'axios'

// Define your API base URL
const BASE_URL = 'https://www.arbeitnow.com/api/job-board-api'

// Function to fetch jobs based on a programming language
export const fetchJobsByLanguage = async language => {
  try {
    const response = await axios.get(`${BASE_URL}?language=${language}`)
    return response.data // Assuming the API response is in JSON format
  } catch (error) {
    console.error('Error fetching jobs:', error)
    throw error // You can handle errors in your components as needed
  }
}

// Function to fetch a specific job by its ID
export const fetchJobById = async jobId => {
  try {
    const response = await axios.get(`${BASE_URL}/${jobId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching job by ID:', error)
    throw error
  }
}

// Function to submit a job application
export const submitJobApplication = async formData => {
  try {
    // You can use axios.post() or another appropriate method to send the application data to the server
    // For file uploads, you may need to configure axios to handle FormData
    // Example: const response = await axios.post(`${BASE_URL}/submit-application`, formData);

    // For this example, we'll assume a successful submission and return a response
    return {success: true, message: 'Application submitted successfully'}
  } catch (error) {
    console.error('Error submitting job application:', error)
    throw error
  }
}
