import {useMutation} from '@apollo/react-hooks'
import Auth from '../utils/auth'
import {ADD_USER} from  '../utils/mutations'
import { useState } from 'react';
import { Input, InputGroup, Button, InputRightElement, Stack } from '@chakra-ui/react'

function Signup() {
  const [show, setShow] =useState(false)
  const handleClick = () => setShow(!show)
  const [formData, setFormData]= useState({
    username: '',
    email: '',
    password: '',
  })

  const [addUser]= useMutation(ADD_USER)

  const handleChange= (event)=>{
    const {name, value}= event.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit= async(event)=> {
    event.preventDefault()
    try {
      const{data}=await addUser({variables:formData})
      Auth.login(data.addUser.token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <Stack spacing={3} mt={12}>
      <p>Signup</p>
      <InputGroup size='md'>
         <Input
          pr='4.5rem'
          type={show ? 'text' : 'username'}
          placeholder='Enter username'
          name='username'
          onChange={handleChange}
        />
        </InputGroup>
      <InputGroup size='md'>
         <Input
          pr='4.5rem'
          type={show ? 'text' : 'email'}
          placeholder='Enter email'
          name='email'
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
      <Button onClick={handleSubmit} colorScheme='blue'>Sign Up</Button>
    </Stack>
  )
}

export default Signup