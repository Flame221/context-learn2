import { Box, Button, Input, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { CountContext } from '../context/CountContext'
import { ReduceContext } from '../context/ReduceContext'

export const About = () => {
const [str, setStr] = useState('')

const { count, setCount } = useContext(CountContext)
const { state, dispatch } = useContext(ReduceContext)

const StringHangler = () => {
  dispatch({type: 'STR', payload: str})
}
  return (
    <div>
      <VStack>
        <p>About</p>
        <p>{count}</p>
        <button onClick={() => setCount(count+1)}>Click Inc</button>

        <Box display={'flex'} flexDirection="column" gap={'2'}>
          <Input placeholder='String' size='xl' value={str} onChange={(e) => setStr(e.target.value)}/>
          <Button onClick={StringHangler}>Set String</Button>
        </Box>
      </VStack>
    </div>
  )
}
