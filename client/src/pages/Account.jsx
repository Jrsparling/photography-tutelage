import React, { Component, useState } from 'react';
import {
  Box,
  Button,
  HStack,
  useColorModeValue,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Grid,
  GridItem,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon, } from '@chakra-ui/icons'

const dummieData=[
    {
        id: 1,
        title: 'Discussion Board 1',
    },
    {
        id: 2,
        title: 'Discussion Board 2',
    },
    {
        id: 3,
        title: 'Discussion Board 3',
    },
    {
        id: 4,
        title: 'Discussion Board 4',
    },
    {
        id: 5,
        title: 'Discussion Board 5',
    },
]

export default function Account() {
  return (
    <Grid
  h='100vh'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato' >
    <Heading>Discussion Boards</Heading>
    <UnorderedList styleType="'-'">
        {dummieData.map((board)=>(
  <ListItem fontSize='2xl' key={board.id}>{board.title}</ListItem>          
        ))}
  
</UnorderedList>
  </GridItem>
  <GridItem rowSpan={2} colSpan={4} bg='tomato' >
  <Heading>Placeholder for Users Most Recent Photos</Heading>
  </GridItem>
</Grid>
  )
}
