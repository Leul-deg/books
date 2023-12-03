import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'


const SearchBox = () => {
  const searchBoxRef = useRef<HTMLInputElement>(null)

  return <form onSubmit={(event) => {
      event.preventDefault()
      setSearchQuery(searchBoxRef.current?.value)
    }}>
    <InputGroup>
      <InputLeftElement children={<BsSearch />}/>
      <Input ref={searchBoxRef} placeholder='Search Games...' borderRadius={10} variant={'filled'}/>
    </InputGroup> 
  </form>
  
}

export default SearchBox
