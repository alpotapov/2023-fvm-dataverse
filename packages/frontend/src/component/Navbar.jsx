import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Box, Container, Image, Link, Flex, Spacer } from '@chakra-ui/react'
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <Container maxW="6xl" py='3'>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box>
          <Link as={ReactLink} to="/">
            <Image src={Logo} alt="Logo" cursor="pointer" mr='32' style={{ width: "180px" }}/>
          </Link>
        </Box>
        <Link as={ReactLink} to="/" mx='10'>Home</Link>
        <Link as={ReactLink} to="/patient" mx='10'>Patient</Link>
        <Link as={ReactLink} to="/query-builder" mx='10'>Query Builder</Link>
        <Spacer />
        <ConnectButton accountStatus="address" label="Sign in" />
      </Flex>
    </Container>
  )
}

export default Navbar
