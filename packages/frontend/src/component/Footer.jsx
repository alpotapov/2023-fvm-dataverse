import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Box, Container, Image, Link, Flex, Text } from '@chakra-ui/react'
import Logo from '../assets/logo2.png';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';

function Footer() {
  return (
    <Box bg="#B2A9F7">
      <Container maxW="6xl" py='5'>
        <Flex minWidth="max-content" justifyContent="space-between" gap="2">
          <Box>
            <Link as={ReactLink} to="/">
              <Image src={Logo} alt="Logo" cursor="pointer" style={{ width: "180px" }}/>
            </Link>
          </Box>
          <Box>
            <Text fontSize="xl" color="white">Contact us</Text>
            <Flex mt="2">
              <Image src={Icon1} alt="Icon" cursor="pointer" mr="3" style={{ width: "18px" }}/>
              <Image src={Icon2} alt="Icon" cursor="pointer" mr="3" style={{ width: "18px" }}/>
              <Image src={Icon3} alt="Icon" cursor="pointer" style={{ width: "17px" }}/>
            </Flex>
            
          </Box>
          <Flex direction="column">
            <Link as={ReactLink} to="/" color="white" mb='1'>Home</Link>
            <Link as={ReactLink} to="/patient-portal" color="white" mb='1'>Patient</Link>
            <Link as={ReactLink} to="/query-builder" color="white" mb='4'>Query Builder</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
