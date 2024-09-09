
import  { useState } from 'react';
import { Input, InputGroup, Button, InputRightElement, Stack} from '@chakra-ui/react'

function Login() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Stack spacing={3} mt={12}>
    <p>Login</p>
    <InputGroup size='md'>
       <Input
        pr='4.5rem'
        type={show ? 'text' : 'email'}
        placeholder='Enter email'
      />
      </InputGroup>
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Button colorScheme='blue'>Button</Button>
  </Stack>
  )
}

export default Login;
