import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext'

export const About = () => {
const { count, setCount } = useContext(CountContext)

  return (
    <div>
      <p>About</p>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>Click Inc</button>
    </div>
  )
}
