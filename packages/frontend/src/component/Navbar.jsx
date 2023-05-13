import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { 
  Box,
  Container,
  Heading,
  Flex,
  Spacer,
  Button
} from '@chakra-ui/react';

function Navbar() {
  const [ethaddress, setETHAddress] = useState("");

  const changePage = useNavigate();

  const openMetaMask = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);  
    
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setETHAddress(address);
  }
  
  return (
    <Container maxW='1100px' p={2}>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md'>Logo</Heading>
        </Box>
        <Link to="/">Home</Link>
        <Link to="/patient">Patient</Link>
        <Link to="/query-builder">Query Builder</Link>
        <Spacer />
        <Button colorScheme='green' onClick={openMetaMask}>
          {ethaddress ? ethaddress : "Connect your MetaMask"}
        </Button>
      </Flex>
    </Container>
  )
}

export default Navbar;