import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from '../pages/MainPage'
import CreateUser from '../pages/CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
    className="z-0 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path='/createuser' element={<CreateUser/>}/>
      </Routes>
    </div>
  )
}

export default App
