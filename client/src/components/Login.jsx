import { Box, Button, Input } from "@chakra-ui/react";

function Login() {
  return (
    <Box
      as="form"
      padding={"16px"}
      bg="white"
      boxShadow={"outline"}
      display={"flex"}
      flexDirection={"column"}
      maxWidth={"35rem"}
      gap={"5px"}
      rounded={"10px"}
    >
      <label >Username</label>
      <Input size={'lg'} placeholder="Enter Username"  />
      <label >Password</label>
      <Input type="password" size={'lg'} placeholder="Enter Password" />
      <Button type="submit" size={'md'} colorScheme="teal">
        Login
      </Button>
      <Button size={'md'} colorScheme="cyan" >Sign Up</Button>
    </Box>
  );
}

export default Login;
