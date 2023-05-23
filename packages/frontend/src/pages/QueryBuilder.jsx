import React, { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import CreateNewQuery from '../utils/CreateNewQuery'
import { useProvider, useSigner } from 'wagmi'
import { chainId } from '../utils/Chain'
import {
  Container,
  Center,
  Flex,
  FormLabel,
  Textarea,
  Heading,
  Button,
  Box,
  SimpleGrid,
  FormControl,
  Input,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react'
import { Web3Storage } from 'web3.storage'

function QueryBuilder(props) {
  const changePage = useNavigate()

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
    <Container minWidth="6xl"  mb="10">
      <Heading mb="6" textAlign="center">EHR Query Builder</Heading>

      <Container maxW="6xl">
        <SimpleGrid minChildWidth='300px' columns={[2]} spacing={10}>
          <Box borderRadius="lg" borderColor="#A49BE7" borderWidth='1px' overflow="hidden" p="4">
            <FormControl mb="5">
              <FormLabel color="#A49BE7" fontWeight="bold" fontSize="xl">QUERY</FormLabel>
              <Textarea rows="7" placeholder='Enter code' />
            </FormControl>

            <FormControl mb="5">
              <FormLabel color="#A49BE7" fontWeight="bold" fontSize="xl">PROJECTION</FormLabel>
              <p>{JSON.stringify(projection)}</p>
              {/* <Textarea rows="4">
              </Textarea> */}
            </FormControl>

            <FormControl mb="5">
              <FormLabel color="#A49BE7" fontWeight="bold" fontSize="xl">NUMBER OF PATIENTS</FormLabel>
              <Input placeholder='Enter numbers' />
            </FormControl>

            <FormControl mb="5">
              <FormLabel color="#A49BE7" fontWeight="bold" fontSize="xl">SCRIPT UPLOAD</FormLabel>
              <input type="file" onChange={handleScript} />
              <p>{scripturl}</p>
            </FormControl>
          </Box>
          <Box borderRadius="lg" borderColor="#817ECB" bg="#A49BE7" borderWidth='1px' overflow="hidden" p="4">
            <Heading fontSize="xl" color="white" mb="7">FEES</Heading>

            <StatGroup mt="3" mb="10" color="white">
              <Stat>
                <StatLabel>Records requested:</StatLabel>
                <StatNumber>10.000</StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Royalties per record:</StatLabel>
                <StatNumber>$200</StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Protocol Fee:</StatLabel>
                <StatNumber>10%</StatNumber>
              </Stat>
            </StatGroup>

            <Text fontSize="2xl" mb="10" color="white">Total: $2.200.00</Text>

            <Center>
              <Button className="button2" mt="5" px="20" py="6" color="white">
                Connect Wallet and Pay
              </Button>
            </Center>
            <br />
            <Center>
              <Button className="buttonMain" px="32" py="6" color="white" onClick={() => changePage("/result-viewer")}>
                Execute Job
              </Button>
            </Center>
          </Box>
        </SimpleGrid>
      </Container>
    </Container>
  )
}

export default QueryBuilder
