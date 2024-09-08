import React from 'react';
import { Box, Button } from '@chakra-ui/react';

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
      justifyContent="space-between"
      alignItems="center"
      zIndex={1000}
    >
      <Button colorScheme='gray' variant='solid'>
        <p>Left</p>
      </Button>
      <Button colorScheme='gray' variant='solid'>
        <p>Right</p>
      </Button>
    </Box>
  );
};

export default Footer;
