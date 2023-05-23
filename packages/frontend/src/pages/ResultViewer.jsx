import React, { useState, useEffect } from 'react'
import {
  Container,
  Center,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Image
} from '@chakra-ui/react'
import Graph from '../assets/graph.png';
import Icon4 from '../assets/icon4.png';

const Data = {
  "Diagnosis": {
  "OneOf": ["Obesity", "Diabetes", "Depression" ]
  },
  "AvailableData": {
  "All": [
  { "name": "Sleep Data", "coverage": "1 Year" },
  "Diagnosis"
  ]
  }
}

function ResultViewer(props) {
  return (
    <Container minWidth="6xl"  mb="10">
      <Heading mb="6" textAlign="center">EHR - Result Viewer</Heading>

      <Center mb="4">
        <Accordion allowToggle width="400px" bg="#817ECB" color="white" borderRadius="lg">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Job Settings
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {JSON.stringify(Data)}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
      

      <Container maxW="6xl">
        <SimpleGrid minChildWidth='300px' columns={[2]} spacing={10}>
          <Box borderRadius="lg" borderColor="#A49BE7" borderWidth='1px' overflow="hidden" p="4">
            <Box borderRadius="lg" bg="#F1F1F1" overflow="hidden" p="4" height="200px" mb="6">
              <Heading fontSize="md" color="#817ECB">STDOUT</Heading>
            </Box>

            <Box borderRadius="lg" bg="#F1F1F1" overflow="hidden" p="4" height="150px">
              <Heading fontSize="md" color="#817ECB" mb="4">STDERR</Heading>
              <Text fontSize="md" color="#817ECB">No error</Text>
             
            </Box>
          </Box>

          <Box borderRadius="lg" borderColor="#817ECB" borderWidth='1px' overflow="hidden" p="4">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading fontSize="xl">Output</Heading>
              <Flex alignItems="center">
                <Text fontSize="md" color="#817ECB" mr="2">Download</Text>
                <Image src={Icon4} alt="Icon" />
              </Flex>
             
            </Flex>
           
            <Image src={Graph} alt="Grahp" mt="4" />
          </Box>
        </SimpleGrid>
      </Container>
    </Container>
  )
}

export default ResultViewer
