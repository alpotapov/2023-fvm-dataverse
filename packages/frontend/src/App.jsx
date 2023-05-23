import { HashRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { WagmiConfig } from 'wagmi'
import { wagmiClient } from './utils/Client'
import { RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit'
import { chains } from './utils/Provider'
import { chainSelected, chainId } from './utils/Chain'
import '@rainbow-me/rainbowkit/styles.css'
import Patient from './pages/Patient'
import PatientPortal from './pages/PatientPortal'
import QueryBuilder from './pages/QueryBuilder'
import Welcome from './pages/Welcome'
import ResultViewer from './pages/ResultViewer'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

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
              <Route path="/patient-portal" element={<PatientPortal />} />
              <Route path="/result-viewer" element={<ResultViewer />} />
              <Route path="/patient" element={<Patient />} />
              <Route path="/" element={<Welcome />} />
            </Routes>
            <Footer />
          </HashRouter>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
