import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AppNavBar } from './components/AppNavBar'
import { CountContext } from './context/CountContext'
import { About } from './pages/About'
import { Home } from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppNavBar/>
      <CountContext.Provider value={{count, setCount}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </CountContext.Provider>
    </>
  )
}

export default App
