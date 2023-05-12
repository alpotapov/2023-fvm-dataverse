import React, { useState, useEffect } from 'react'
import {
  Box,
  Image,
  Heading,
  Text,
  Center,
  Container,
  Flex,
  Card,
  Button,
  Badge,
} from '@chakra-ui/react'
import CardRequest from '../component/CardRequest'

const data = [
  {
    id: 1,
    company: 'Phizer Pharmacy',
    data_requested: ['blood test', 'diabetes test', 'sleep data for 1 year'],
    offer: '200',
    company_logo_url:
      'https://companieslogo.com/img/orig/PFE-749aeae5.png?t=1633215085',
  },
  {
    id: 2,
    company: 'MediHealth',
    data_requested: ['cholesterol test', 'heart rate monitoring'],
    offer: '220',
    company_logo_url:
      'https://previews.123rf.com/images/pavlostv/pavlostv1805/pavlostv180500276/101291432-medical-logo-%E2%80%93-stock-vector.jpg',
  },
  {
    id: 3,
    company: 'Wellness Labs',
    data_requested: ['full body check-up', 'BMI calculation'],
    offer: '300',
    company_logo_url:
      'https://c8.alamy.com/comp/2A1H08Y/medical-pharmacy-logo-design-template-vector-illustrator-medicine-symbol-medical-logo-cross-plus-medical-logo-icon-design-template-elements-2A1H08Y.jpg',
  },
  {
    id: 4,
    company: 'Genomed',
    data_requested: ['genetic screening', 'allergy testing'],
    offer: '400',
    company_logo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_6drRYsHn9mhgKPJTY8VMsfIP8G7oLL7ZA&usqp=CAU',
  },
]

function Patient(props) {
  const [requests, setRequests] = useState(data)
  const [requestCount, setRequestCount] = useState(0)
  const company = 'Phizer Pharmacy'

  useEffect(() => {
    setRequestCount(requests.length)
  }, [])

  return (
    <Container minWidth="6xl">
      {/* OLD DESIGN */}
      {/* <Box p="6" maxW="500px" mx="auto">
        <Center>
          <Image
            borderRadius="full"
            boxSize="200px"
            src="https://media.licdn.com/dms/image/C5603AQFcX513C5VuAA/profile-displayphoto-shrink_800_800/0/1627940080674?e=1689206400&v=beta&t=NmQbhxmr7WjTNOPOFG8pAhIIHJzKvSVlp7udK7mo958"
            alt="Profile picture"
            mb="4"
          />
        </Center>
        <Heading as="h1" size="lg" mb="2">
          John Doe
        </Heading>
        <Text fontSize="xl" fontWeight="medium" mb="4">
          37 y.o Male
        </Text>
      </Box>

      <Flex>
        <Flex w="50%" bg="yellow.100" h={500}>
          <Box textAlign="left" py="4" pl="10">
            <Heading size="md" pt="3">
              PATIENT SUMMARY
            </Heading>

            <Box className="record" pt="4">
              <Text fontSize="lg" color="blue.400" fontWeight="extrabold">
                Medical Record Number
              </Text>
              <Text fontSize="lg">987645</Text>
            </Box>

            <Box className="provider" pt="4">
              <Text fontSize="lg" color="blue.400" fontWeight="extrabold">
                Rendering Provider
              </Text>
              <Text fontSize="lg">Lincoln, Julee</Text>
            </Box>

            <Box className="office" pt="4">
              <Text fontSize="lg" color="blue.400" fontWeight="extrabold">
                Office Telephone Number
              </Text>
              <Text fontSize="lg">(229) 219-7890 </Text>
            </Box>

            <Box className="office-address" pt="4">
              <Text fontSize="lg" color="blue.400" fontWeight="extrabold">
                Office Address
              </Text>
              <Text fontSize="lg">105 W Central Park </Text>
              <Text fontSize="lg">New York, NY, 10024</Text>
            </Box>
          </Box>
        </Flex>

        <Flex w="50%" bg="gray.100" h={500} overflow="auto">
          <Box textAlign="left" p="4">
            <Heading size="md" p="3" pb="0">
              Data Requests {`(${requestCount})`}
            </Heading>

            {data.length > 0
              ? data.map((record) => (
                  <CardRequest record={record} key={record.id} />
                ))
              : 'No Requests'}
          </Box>
        </Flex>
      </Flex> */}

      <Flex>
        <Flex w="50%" bg="yellow.100">
          <Box p="6" maxW="500px" mx="auto">
            <Center>
              <Image
                borderRadius="full"
                boxSize="200px"
                src="https://media.licdn.com/dms/image/C5603AQFcX513C5VuAA/profile-displayphoto-shrink_800_800/0/1627940080674?e=1689206400&v=beta&t=NmQbhxmr7WjTNOPOFG8pAhIIHJzKvSVlp7udK7mo958"
                alt="Profile picture"
                mb="4"
              />
            </Center>
            <Heading as="h1" size="lg" mb="2">
              John Doe
            </Heading>
            <Text fontSize="xl" fontWeight="medium">
              37 y.o Male
            </Text>
          </Box>
        </Flex>

        <Flex w="50%" bg="gray.100">
          <Box textAlign="left" p="6" pl="10">
            <Heading size="md" pt="3">
              PATIENT SUMMARY
            </Heading>

            <Box className="record" pt="4">
              <Text fontSize="lg" color="blue.400" fontWeight="extrabold">
                Medical Record Number
              </Text>
              <Text fontSize="lg">987645</Text>
            </Box>

            <Box className="provider" pt="4">
              <Text fontSize="lg" color="blue.400" fontWeight="extrabold">
                Rendering Provider
              </Text>
              <Text fontSize="lg">Lincoln, Julee</Text>
            </Box>

            <Box className="office" pt="4">
              <Text fontSize="lg" color="blue.400" fontWeight="extrabold">
                Office Telephone Number
              </Text>
              <Text fontSize="lg">(229) 219-7890 </Text>
            </Box>

            <Box className="office-address" pt="4">
              <Text fontSize="lg" color="blue.400" fontWeight="extrabold">
                Office Address
              </Text>
              <Text fontSize="lg">105 W Central Park </Text>
              <Text fontSize="lg">New York, NY, 10024</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Card p="4">
        <Heading size="md" textAlign="left">
          Data Requests {`(${requestCount})`}
        </Heading>
      </Card>

      <Card>
        <Flex py="3">
          <Flex w="50%" h={500} overflow="auto" px="5">
            <Box textAlign="left">
              {data.length > 0
                ? data.map((record) => (
                    <CardRequest record={record} key={record.id} />
                  ))
                : 'No Requests'}
            </Box>
          </Flex>

          <Flex w="50%" bg="white" h={500} overflow="auto">
            <Box px="4" borderLeft="2px solid gray">
              <Badge colorScheme="yellow" p="3" textAlign="left">
                {`Researcher from ${company} is requesting your data`}
              </Badge>

              <Text pt="2" fontSize="sm">
                You have records in EHR that are needed for a research and the
                following data has been requested:
              </Text>
              <Center pt="2">
                <Image src="/userdata.png" w={300} h={280} alt="userdata" />
              </Center>
              <Text size="sm" fontSize="sm">
                Data will be supplied in anonymized way and it will not be
                possible to link it to you.
              </Text>
              <Text pt="2">
                <strong>Data usage royalties:</strong> $200
              </Text>

              <Flex align="center" pt="3" justify="center">
                <Button colorScheme="whatsapp" mr="2">
                  Provide Data ✅
                </Button>
                <Button colorScheme="red">Decline Data</Button>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Card>
    </Container>
  )
}

export default Patient
