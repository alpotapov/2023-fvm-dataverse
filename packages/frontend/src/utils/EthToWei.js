import { ethers } from 'ethers'

export default function EthToWei(n) {
  try {
    return ethers.utils.parseUnits(n.toString(), 'ether')
  } catch (error) {
    console.log(error)
  }
}
