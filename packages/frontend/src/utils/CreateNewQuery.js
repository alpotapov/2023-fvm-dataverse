import EthToWei from './EthToWei'
import { ethers } from 'ethers'
const mainAddress = import.meta.env.VITE_MAIN_CONTRACT_ADDRESS
import { ABI } from './ABI'

const CreateNewQuery = async (provider, signer, queryCid, fee) => {
  let args = []

  args.push({
    gasLimit: 1800000,
    value: EthToWei(String(fee)),
  })
  console.log('args:', args)

  try {
    const contract = new ethers.Contract(mainAddress, ABI, signer)
    console.log('ABI:', ABI)
    const tx = await contract['createNewQuery'](queryCid, fee)
    console.log('🚀 tx:', tx)

    const receipt = await tx.wait()
    console.log('🚀receipt:', receipt)

    if (!receipt) {
      throw new Error('Tx failed')
    }
    return {
      data: receipt,
      hasError: false,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export default CreateNewQuery
