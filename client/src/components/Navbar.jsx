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
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box bg='skyblue' w='100%' p={10} color='white' fontSize={32} display='flex' justifyContent='space-between'>
  <p>Photography Tutelage</p>
  <Stack direction='row' spacing={4}>
  <Button leftIcon={<AddIcon />} colorScheme='teal' variant='solid'>
    Signup
  </Button>
  <Button rightIcon={<WarningIcon />} colorScheme='teal' variant='outline'>
    Login
  </Button>
</Stack>
    </Box>
    
    // //<nav className="bg-white shadow-lg">
    //   //<div className="max-w-6xl mx-auto px-4">
    //     //<div className="flex justify-between">
    //     //  <div className="flex  justify-between w-full">
    //       //  <div>
    //      //     {/* Website Logo */}
    //           <NavLink to="/" className="flex items-center py-4 px-2">
    //             <span className="font-semibold text-gray-500 text-lg">Photography Tutelage</span>
    //           </NavLink>
    //         </div>
    //         {/* Primary Navbar items */}
    //         <div className="hidden md:flex items-center space-x-1">
    //         <NavLink to='/'className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300" >Home</NavLink>
    //         <NavLink to='/auth'className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300" >Login</NavLink>
    //         </div>
    //       </div>
    //       {/* Mobile menu button */}
    //       <div className="md:hidden flex items-center">
    //         <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
    //           <svg
    //             className="w-6 h-6 text-gray-500 hover:text-green-500"
    //             fill="none"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             {isOpen ? (
    //               <path d="M6 18L18 6M6 6l12 12" />
    //             ) : (
    //               <path d="M4 6h16M4 12h16M4 18h16" />
    //             )}
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Mobile Menu */}
    //   <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
    //     <NavLink to='/'className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300" >Home</NavLink>
    //     <NavLink to='/auth'className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300" >Login</NavLink>
    //   </div>
    // </nav>
  );
};

export default Navbar;
