// import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import ProfileCard from './components/ProfileCard'
import StatusMessage from './components/StatusMessage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Greeting name="Toheed"/>
     <ProfileCard name="Toheed" age="20" location="India"/>
     <StatusMessage status="success" />
    </>
  )
}

export default App
