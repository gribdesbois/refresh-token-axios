/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const [state, setState] = useState({})
  const [display, setDisplay] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  const [status, setStatus] = useState('')
  const [data, setData] = useState('')
  const [Error, setError] = useState('')

  const hostUrl = 'http://localhost:3535'

  const axios_instance = axios.create({
    baseURL: hostUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  useEffect(async () => {
    console.log('Start request')
    try {
      const response = await axios_instance.get('/access')
      setState((prevState) => ({
        ...prevState,
        status: `Status code ${response.status}`,
        data: `Status code ${JSON.stringify(response.data)}`,
        isLoaded: true,
      }))
    } catch (err) {
      setState((prevState) => ({
        ...prevState,
        error: `Error ${err.response.status}`,
        isError: true,
      }))
    }
  }, [])

  const {status, data,error, isLoaded, isError}
  if (isError) {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          {error}
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
         {status} : {data}
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
