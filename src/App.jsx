import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from '../pages/MainPage'
import CreateUser from '../pages/CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path='/createuser' element={<CreateUser/>}/>
      </Routes>
    </>
  )
}

export default App
