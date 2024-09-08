import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Button, 
  ButtonGroup,
  Stack,
  Flex,
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
const Photogallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (   
    <Flex align="center" justify="center">
      <Box bg='tomato' w='80%' h='80vh' p={4} pb={8} m={[16]} color='white'>
        This is the Box
      </Box>
    </Flex>
  );
};

export default Photogallery;