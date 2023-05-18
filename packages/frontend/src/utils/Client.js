import { createClient } from 'wagmi'
import { connectors } from './Connector'
import { provider } from './Provider'

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})
