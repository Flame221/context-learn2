import { Divider, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext'
import { ReduceContext } from '../context/ReduceContext'

export const Home = () => {
  const { count } = useContext(CountContext)
  const { state, dispatch } = useContext(ReduceContext)

  return (
    <div>
      <Heading>Home</Heading>
      <Text>Count : {count}</Text>
      <Divider/>
      <Text>Count : {state.string}</Text>
      
    </div>
  )
}
