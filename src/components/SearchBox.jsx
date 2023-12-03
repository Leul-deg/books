import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'


const SearchBox = () => {
  const searchBoxRef = useRef(null)

  return <form onSubmit={(event) => {
    event.preventDefault()
    }}>
     <InputGroup>
      <InputLeftElement children={<BsSearch />}/>
      <Input ref={searchBoxRef} placeholder='Search Books...' borderRadius={10} variant={'filled'}/>
    </InputGroup> 
  </form>
  
}

export default SearchBox
  