import React, { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { useProvider, useSigner } from 'wagmi'
import { chainId } from '../utils/Chain'
import {
  Container,
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Image,
  Button,
  Text,
} from '@chakra-ui/react'
import { Web3Storage } from 'web3.storage'
import Image1 from '../assets/image1.png';

function Welcome(props) {
  const changePage = useNavigate()

  return (
    <div style={{ background : "#A49BE7" }}>
      <Container maxW="6xl">
        <SimpleGrid minChildWidth='300px' columns={[2]} spacing={10} height="90vh" pt="32">
          <Box borderRadius="lg" overflow="hidden" p="4">
            <Heading fontSize="4xl" color="white" mb="0">
              DECENTRALIZED
            </Heading>
            <Heading fontSize="4xl" color="white" mb="2">
              QUERYABLE
            </Heading>
            <Text fontSize="3xl" color="white" mb="0">
              ELECTRONIC
            </Text>
            <Text fontSize="3xl" color="white">
              HEALTH RECORD
            </Text>
            <Button className="buttonMain" mt="5" px="14" py="5" color="white" onClick={() => changePage("/query-builder")}>
              QUERYBUILDER
            </Button>
          </Box>
          <Flex justifyContent="space-between">
            <Image className="homeimage" src={Image1} alt="Health" />
          </Flex>
        </SimpleGrid>
      </Container>
    </div>
  )
}

export default Welcome
