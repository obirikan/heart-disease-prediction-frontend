import React from 'react'
import { Input,InputGroup,InputLeftElement,Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'



const First = () => {
  return (
    <div>
        <div >

<InputGroup className='f'>
    <Input w="600px" placeholder='tell us about your image' />
    <Button w='60px' colorScheme='blue' m={3}>    
    <InputLeftElement
      pointerEvents='pointer'
      ml={2.5}
      children={<SearchIcon color='gray.300' />}
    />
    </Button>
</InputGroup>
        </div>
        <div className='bb'>
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
    </div>
  )
}

export default First