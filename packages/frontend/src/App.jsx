import { ChakraProvider } from '@chakra-ui/react'
import Patient from './pages/Patient'
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Patient />
    </ChakraProvider>
  )
}

export default App
