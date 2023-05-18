import React, { useState, useEffect } from 'react'
import CreateNewQuery from '../utils/CreateNewQuery'
import { useProvider, useSigner } from 'wagmi'
import { chainId } from '../utils/Chain'
import {
  Container,
  Flex,
  FormLabel,
  Textarea,
  Heading,
  Button,
} from '@chakra-ui/react'
import { Web3Storage } from 'web3.storage'

function QueryBuilder(props) {
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
    <Container minWidth="6xl">
      <Heading mb="6">EHR Query Builder</Heading>
      <Flex mb="5">
        <FormLabel w="32">Query</FormLabel>
        <Textarea rows="7" />
      </Flex>
      <Flex mb="5">
        <FormLabel w="32">Projection</FormLabel>
        <p>{JSON.stringify(projection)}</p>
        {/* <Textarea rows="4">
        </Textarea> */}
      </Flex>
      <Flex mb="5">
        <FormLabel w="32">Script Upload</FormLabel>
        <input type="file" onChange={handleScript} />
        <p>{scripturl}</p>
      </Flex>
      <Flex mt="5" mb="5">
        <FormLabel w="32"></FormLabel>
        <div>
          <Button colorScheme="blue" mb="3">
            Connect Wallet and Pay
          </Button>
          <br />
          <Button colorScheme="blue" onClick={handleCreateNewQuery}>
            Execute Job
          </Button>
        </div>
      </Flex>
    </Container>
  )
}

export default QueryBuilder
