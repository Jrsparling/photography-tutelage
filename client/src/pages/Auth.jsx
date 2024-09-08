import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/signup";
import { Flex } from "@chakra-ui/react";

function Auth() {
  const [islogin, setIslogin] = useState(true);
  return (
    <Flex
      minH="36rem"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {islogin ? <Login /> : <Signup />}
    </Flex>
  );
}

export default Auth;
