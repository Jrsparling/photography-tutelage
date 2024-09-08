import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  useColorModeValue,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontSize='larger' fontWeight='bold' fontFamily='cursive'>Photography Tutelage</Box>
            
          </HStack>
          <Flex alignItems={"center"}>
          <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
             <NavLink to={'/'}>Home</NavLink>
             <NavLink to={'/auth'}>Login</NavLink>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
            <NavLink to={'/'}>Home</NavLink>
             <NavLink to={'/auth'}>Login</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
