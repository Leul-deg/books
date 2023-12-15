import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'


const GameCardContainer = ({ children }) => {
  return (
    <Box _hover={{
      transform: 'scale(1.03)'
    }} borderRadius={15} overflow={'hidden'}>
      { children }
    </Box>
  )
}

export default GameCardContainer
