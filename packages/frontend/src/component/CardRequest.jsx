import React from 'react'
import {
  Box,
  Heading,
  Text,
  Flex,
  Card,
  Stack,
  Button,
  Avatar,
} from '@chakra-ui/react'

function CardRequest({ record }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      bg="blue.100"
      p="3"
      borderRadius="25px"
      m="3"
    >
      <Stack direction="row" align="center">
        <Avatar name="Kola Tioluwani" src={record.company_logo_url} />
        <Box>
          <Heading size="md">{record.company}</Heading>
          <Text py="1">
            <strong>Data requested: </strong>
            {record.data_requested.join(', ')}
          </Text>

          <Text py="1">
            <strong>Offer: </strong>
            {record.offer}
          </Text>
        </Box>
        <Flex align="center">
          <Button colorScheme="whatsapp" size="md">
            Details
          </Button>
        </Flex>
      </Stack>
    </Card>
  )
}

export default CardRequest
