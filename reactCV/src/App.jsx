import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalDetails from './PersonalDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Build a CV</h1>
      <PersonalDetails/>
    </>
  )
}

export default App
