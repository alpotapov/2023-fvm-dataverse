import React, { useState, useEffect } from 'react'
import CreateNewQuery from '../utils/CreateNewQuery'
import { useProvider, useSigner } from 'wagmi'
import { chainId } from '../utils/Chain'
import {
  Container,
  Alert,
  AlertIcon,
  Stack,
  Heading,
  Button,
  Box,
  SimpleGrid,
  Center,
  Text,
} from '@chakra-ui/react'
import { Web3Storage } from 'web3.storage'

function PatientPortal(props) {
  const provider = useProvider(chainId)
  const { data: signer } = useSigner(chainId)
  const [scripturl, setscripturl] = useState('')
  const [script, setScript] = useState('')
  const [projection, setProjection] = useState({
    blood_type: '...',
    height: '...',
    weight: '...',
    bmi: '...',
  })

  const API_TOKEN = ''

  const handleProjection = async () => {
    const obj = { hello: 'Are you working?' }
    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
    const files = [new File([blob], 'hello.json')]
    return files
  }

  const handleScript = async (event) => {
    setScript(event.target.files[0])
  }

  const handleCreateNewQuery = async () => {
    try {
      const client = new Web3Storage({ token: API_TOKEN })
      if (script) {
        const script_cid = await client.put([script])
        const projection = await handleProjection()
        const projection_cid = await client.put(projection)

        console.log('script_cid:', script_cid)
        console.log('projection_cid:', projection_cid)
      }
      // Yonathan will fix the contract
      // const fee = 0.01
      // const queryCid =
      //   '0x9a9d5c28ecb9674cf11f15ec73c24623d599afdbb98cba81698a0c7bbd85c319'
      // await CreateNewQuery(provider, signer, queryCid, fee)
    } catch (error) {
      console.log(error)
    }
    // Notify executing, Success or fail
  }

  return (
    <Container minWidth="6xl" mb="10">
      <Heading mb="6" textAlign="center">EHR - PATIENT PORTAL</Heading>

      <Center>
        <Stack spacing={4} direction="row" align="center" mb="4">
          <Button size="md" bg="white" borderColor="#A49BE7" borderWidth='1px' >
            Data Requests
          </Button>
          <Button size="md" bg="white">
            My Record
          </Button>
        </Stack>
      </Center>

      <Center>
        <Alert status='warning' width="700px" mb="4">
          <AlertIcon />
          Researcher from Technical University of Munich requests your data
        </Alert>
      </Center>

      <Center>
        <Box borderRadius="lg" borderColor="#A49BE7" borderWidth='1px' overflow="hidden" p="4" width="700px">
          <Heading mb="6" fontSize="lg">
            You have records in EHR that are needed for the research:
          </Heading>

          <SimpleGrid minChildWidth='300px' columns={[2]} spacing={5}>
            <Box borderRadius="lg" overflow="hidden">
              <Text fontSize="md" mb="28">
                Data will be supplied in anonymized way and it will not be possible to link it to you.
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                Data usage royalties:
              </Text>
              <Text fontSize="4xl">
                $200
              </Text>
            </Box>
            <Box borderRadius="lg" borderColor="#817ECB" bg="#F1F1F1" borderWidth='1px' overflow="hidden" p="4">
              <Heading fontSize="xl" color="#817ECB">Data Requested</Heading>
              <Text fontSize="xl" mb="10" color="#817ECB">`
                <p>{JSON.stringify(projection)}</p>
              </Text>
            </Box>
          </SimpleGrid>
          <Center>
            <Button className="button2" mt="5" px="20" py="6" color="white">
              PROVIDE DATA
            </Button>
          </Center>
        </Box>
      </Center>
    </Container>
  )
}

export default PatientPortal
