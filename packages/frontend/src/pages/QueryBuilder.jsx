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
  const [scripturl, setscripturl] = useState("");

  const handleUpload = async (event) => {
    const image = event.target.files[0]
    const formData = new FormData()
    formData.append('file', image)

    const response = await fetch('http://localhost:4000/api/medical/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json()
    setscripturl(data.protocolLink);
  }

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
        <input type='file' onChange={handleUpload}/>
        <p>{scripturl}</p>
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
