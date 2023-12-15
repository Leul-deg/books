import { Badge } from '@chakra-ui/react'


const GameCriticBadge = ({ metacritic }) => {
  const color = metacritic > 90 ? 'green' : metacritic > 60 ? 'yellow' : ''

  return <Badge fontSize='14px' borderRadius={'5px'} paddingX={2} colorScheme={color}>
    { metacritic }
  </Badge>
}

export default GameCriticBadge
