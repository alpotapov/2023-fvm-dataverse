import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Patient from './pages/Patient'
import QueryBuilder from './pages/QueryBuilder';
import Navbar from './component/Navbar'
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            path="/query-builder"
            element={
              <QueryBuilder />} />
          <Route
            path="/patient"
            element={
              <Patient />} />
          <Route
            path="/"
            element={
              <h1>Welcome</h1>} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
