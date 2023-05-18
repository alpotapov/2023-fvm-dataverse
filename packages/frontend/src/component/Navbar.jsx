import React from 'react'
import { Link } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import { Box, Container, Heading, Flex, Spacer } from '@chakra-ui/react'

function Navbar() {
  return (
    <Container maxW="1100px" p={2}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Logo</Heading>
        </Box>
        <Link to="/">Home</Link>
        <Link to="/patient">Patient</Link>
        <Link to="/query-builder">Query Builder</Link>
        <Spacer />
        <ConnectButton accountStatus="address" label="Sign in" />
      </Flex>
    </Container>
  )
}

export default Navbar
