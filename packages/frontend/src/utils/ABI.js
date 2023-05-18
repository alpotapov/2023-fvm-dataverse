export const ABI = [
  {
    inputs: [
      {
        internalType: 'contract IEncryptionOracle',
        name: '_oracle',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CallbackNotAuthorized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CallbackNotAuthorized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InsufficentFunds',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256',
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'x',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'y',
                type: 'uint256',
              },
            ],
            internalType: 'struct G1Point',
            name: 'random',
            type: 'tuple',
          },
        ],
        indexed: false,
        internalType: 'struct ReencryptedCipher',
        name: 'reencryptedCipher',
        type: 'tuple',
      },
    ],
    name: 'ListingDecryption',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'researcher',
        type: 'address',
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'x',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'y',
                type: 'uint256',
              },
            ],
            internalType: 'struct G1Point',
            name: 'random',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'cipher',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'x',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'y',
                type: 'uint256',
              },
            ],
            internalType: 'struct G1Point',
            name: 'random2',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'f',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'e',
                type: 'uint256',
              },
            ],
            internalType: 'struct DleqProof',
            name: 'dleq',
            type: 'tuple',
          },
        ],
        indexed: true,
        internalType: 'struct Ciphertext',
        name: 'queryCid',
        type: 'tuple',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'cipher',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    name: 'NewQueryCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'dataprovided',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256',
      },
    ],
    name: 'ResponseProvided',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Withdrawal',
    type: 'event',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'x',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'y',
                type: 'uint256',
              },
            ],
            internalType: 'struct G1Point',
            name: 'random',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'cipher',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'x',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'y',
                type: 'uint256',
              },
            ],
            internalType: 'struct G1Point',
            name: 'random2',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'f',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'e',
                type: 'uint256',
              },
            ],
            internalType: 'struct DleqProof',
            name: 'dleq',
            type: 'tuple',
          },
        ],
        internalType: 'struct Ciphertext',
        name: '_queryCid',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'createNewQuery',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oracle',
    outputs: [
      {
        internalType: 'contract IEncryptionOracle',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'requestId',
        type: 'uint256',
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'x',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'y',
                type: 'uint256',
              },
            ],
            internalType: 'struct G1Point',
            name: 'random',
            type: 'tuple',
          },
        ],
        internalType: 'struct ReencryptedCipher',
        name: 'cipher',
        type: 'tuple',
      },
    ],
    name: 'oracleResult',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'publicKey',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'y',
            type: 'uint256',
          },
        ],
        internalType: 'struct G1Point',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'queries',
    outputs: [
      {
        internalType: 'address',
        name: 'researcher',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'cipherId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'queryCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'queryResponses',
    outputs: [
      {
        internalType: 'address',
        name: 'dataprovider',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'queryId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'requestedId',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'researcherFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_queryId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'x',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'y',
            type: 'uint256',
          },
        ],
        internalType: 'struct G1Point',
        name: 'buyerPublicKey',
        type: 'tuple',
      },
    ],
    name: 'respondToQuery',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'setPause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newValue',
        type: 'uint256',
      },
    ],
    name: 'setResearcherFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
