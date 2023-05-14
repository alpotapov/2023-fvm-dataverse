# FVM Dataverse

This is a template for foundry that provides the basic scaffolding for quickly getting started with new projects. 

## Deployment script

```bash
# Compile FVM Contracts
forge build
# Deploy to FVM Testnet
forge create --rpc-url https://api.hyperspace.node.glif.io/rpc/v1  --constructor-args 0xb0dd3eb2374b21b6efacf41a16e25ed8114734e0 --private-key %PRIVATE_KEY% src/main.sol:EHR
# Verify contract on FVM Testnet
forge verify-contract --chain-id 3141 --num-of-optimizations 200 --watch --constructor-args $(cast abi-encode "constructor(IEncryptionOracle)" "0xb0dd3eb2374b21b6efacf41a16e25ed8114734e0") --etherscan-api-key %ETHERSCAN_API% --compiler-version v0.8.19+commit.7dd6d404 0xA3f5fd6410bb00efA0E42b18BB5dEA1bC185304f src/main.sol:EHR 
# Output:
Submitted contract for verification:
                Response: `OK`
                GUID: `a6yrbjp5prvakia6bqp5qdacczyfhkyi5j1r6qbds1js41ak1a`
                url: https://sepolia.etherscan.io//address/0x6a54…3a4c#code
# Another way to verify:
forge create --rpc-url https://api.hyperspace.node.glif.io/rpc/v1 --constructor-args 0xb0dd3eb2374b21b6efacf41a16e25ed8114734e0 --private-key %PRIVATE_KEY% --etherscan-api-key %ETHERSCAN_API% --verify src/main.sol:EHR

# Current deployments:
Deployer: 0x6a30fcA0254812026931117773DCa2B5ABcaF386
Deployed to: 0xA3f5fd6410bb00efA0E42b18BB5dEA1bC185304f
Transaction hash: 0x7fef45c0a3ff82bac6078463c0938d13ed41aef3b7ac0f0c95e42ae57e33b360
```