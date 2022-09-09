import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext'

export const Home = () => {
  const { count, setCount } = useContext(CountContext)

  return (
    <div>
      <p>Home</p>
      <p>{count}</p>
    </div>
  )
}
