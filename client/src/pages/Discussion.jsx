import React, { Component, useState } from "react";
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
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const dummieData = [
  {
    id: 1,
    title: "Discussion Board 1",
  },
  {
    id: 2,
    title: "Discussion Board 2",
  },
  {
    id: 3,
    title: "Discussion Board 3",
  },
  {
    id: 4,
    title: "Discussion Board 4",
  },
  {
    id: 5,
    title: "Discussion Board 5",
  },
];

const dummieDataComments = [
    {
      id: 1,
      comment: "Comment Board 1",
    },
    {
      id: 2,
      comment: "Comment Board 2",
    },
    {
      id: 3,
      comment: "Comment Board 3",
    },
    {
      id: 4,
      comment: "Comment Board 4",
    },
    {
      id: 5,
      comment: "Comment Board 5",
    },
  ];

export default function Account() {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={5} colSpan={1} bg="tomato">
        <Heading>Discussion Boards</Heading>
        <UnorderedList styleType="'-'">
          {dummieData.map((board) => (
            <ListItem fontSize="2xl" key={board.id}>
              {board.title}
            </ListItem>
          ))}
        </UnorderedList>
      </GridItem>
      <GridItem rowSpan={1} colSpan={4} bg="tomato">
      <Heading>Discussion Board Title</Heading>
      </GridItem>
      <GridItem rowSpan={4} colSpan={2} bg="tomato">
      <Heading>Placeholder for Photo</Heading>
      </GridItem>
      <GridItem rowSpan={4} colSpan={2} bg="tomato">
        <Grid
          h="100vh"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={5} bg="papayawhip">
          <Heading>Discussion Boards</Heading>
          </GridItem>
          <GridItem rowSpan={4} colSpan={5} bg="papayawhip">
          <Heading>Discussion Boards</Heading>
        <UnorderedList styleType="'-'">
          {dummieDataComments.map((board) => (
            <ListItem fontSize="2xl" key={board.id}>
              {board.comment}
            </ListItem>
          ))}
        </UnorderedList>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
