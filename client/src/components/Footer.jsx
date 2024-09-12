import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      bg='steelblue'
      w='100%'
      p={10}
      color='white'
      fontSize={32}
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={1000}
    >
      <Button colorScheme='gray' variant='solid'>
        <ArrowLeftIcon>

        </ArrowLeftIcon>
      </Button>
      <Box w='80%' p={10} color='white' fontSize={32} display='flex' justifyContent='space-between' bg='white' m={5}>
        
      </Box>
      <Button colorScheme='gray' variant='solid'>
      <ArrowRightIcon>
        
      </ArrowRightIcon>
      </Button>
    </Box>
  );
};

export default Footer;
