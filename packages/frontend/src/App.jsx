import { HashRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { WagmiConfig } from 'wagmi'
import { wagmiClient } from './utils/Client'
import { RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit'
import { chains } from './utils/Provider'
import { chainSelected, chainId } from './utils/Chain'
import '@rainbow-me/rainbowkit/styles.css'
import Patient from './pages/Patient'
import QueryBuilder from './pages/QueryBuilder'
import Navbar from './component/Navbar'
import './App.css'

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        initialChain={chainSelected[Number(chainId || 0)]}
        theme={midnightTheme()}
      >
        <ChakraProvider>
          <HashRouter>
            <Navbar />
            <Routes>
              <Route path="/query-builder" element={<QueryBuilder />} />
              <Route path="/patient" element={<Patient />} />
              <Route path="/" element={<h1>Welcome</h1>} />
            </Routes>
          </HashRouter>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
