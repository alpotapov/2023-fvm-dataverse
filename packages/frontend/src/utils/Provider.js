import { configureChains } from 'wagmi'
import { chainSelected } from './Chain'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'

export const { chains, provider } = configureChains(chainSelected, [
  publicProvider(),
  jsonRpcProvider({
    rpc: (chain) => ({
      http: chain.rpcUrls,
    }),
  }),
])
