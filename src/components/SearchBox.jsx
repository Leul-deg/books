import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'


const SearchBox = () => {
  // const searchBoxRef = useRef<HTMLInputElement>(null)

  return <form onSubmit={(event) => {
      event.preventDefault()
    }}>
    <InputGroup>
      <InputLeftElement children={<BsSearch />}/>
    </InputGroup> 
  </form>
  
}

export default SearchBox
