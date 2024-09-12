import {useMutation} from '@apollo/react-hooks'
import  { useState } from 'react';
import { Input, InputGroup, Button, InputRightElement, Stack} from '@chakra-ui/react'
import Auth from '../utils/auth'
import {LOGIN} from  '../utils/mutations'

function Login() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [formData, setFormData]= useState({
    username: '',
    email: '',
    password: '',
  })

  const [login]= useMutation(LOGIN)

  const handleChange= (event)=>{
    const {name, value}= event.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit= async(event)=> {
    event.preventDefault()
    try {
      const{data}=await login({variables:formData})
      Auth.login(data.login.token)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Stack spacing={3} mt={12}>
    <p>Login</p>
    <InputGroup size='md'>
       <Input
        pr='4.5rem'
        type={show ? 'text' : 'email'}
        placeholder='Enter email'
        name= 'email'
        onChange={handleChange}
      />
      </InputGroup>
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        name='password'
        onChange={handleChange}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Button colorScheme='blue'onClick={handleSubmit}>Login</Button>
  </Stack>
  )
}

export default Login;
