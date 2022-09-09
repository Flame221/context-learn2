import { Button, Heading } from '@chakra-ui/react'
import { useReducer, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AppNavBar } from './components/AppNavBar'
import { CountContext } from './context/CountContext'
import { ReduceContext } from './context/ReduceContext'
import { About } from './pages/About'
import { Home } from './pages/Home'

const initialState = {
  count: 0,
  string: '',
  isNew: false
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case state:
    return { ...state, ...payload }
    //count operations
  case 'INC':
    return { ...state, count: state.count + 1}
    
  case 'DEC':
    return { ...state, count: state.count - 1}
    //string operations
  case 'STR':
    return { ...state, string: payload}
    //boolen operations
  case 'NEW':
    return { ...state, isNew: !state.isNew}

  default:
    return state
  }
}


function App() {
  const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      
      <ReduceContext.Provider value={{state, dispatch}}>
        <CountContext.Provider value={{count, setCount}}>
        <AppNavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </CountContext.Provider>
      </ReduceContext.Provider>
    </>
  )
}

export default App
