import React, { useState, useEffect } from 'react'
import {
  Container,
  Flex,
  FormLabel,
  Textarea,
  Heading,
  Button
} from '@chakra-ui/react'

function QueryBuilder(props) {
  return (
    <Container minWidth="6xl">
      <Heading mb="6">EHR Query Builder</Heading>
      <Flex mb="5">
        <FormLabel w="32">Query</FormLabel>
        <Textarea rows="7"/>
      </Flex>
      <Flex mb="5">
        <FormLabel w="32">Projection</FormLabel>
        <Textarea  rows="4"/>
      </Flex>
      <Flex mb="5">
        <FormLabel w="32">Script Upload</FormLabel>
        <Button>Browse File</Button>
      </Flex>
      <Flex mt="5" mb="5">
        <FormLabel w="32"></FormLabel>
        <div>
        <Button colorScheme="blue" mb="3">Connect Wallet and Pay</Button>
          <br />
          <Button colorScheme="blue">Execute Job</Button>
        </div>
      </Flex>
     
    </Container>
  )
}

export default QueryBuilder
