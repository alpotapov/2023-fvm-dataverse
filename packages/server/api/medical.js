import express from 'express';
import * as LitJsSdk from "@lit-protocol/lit-node-client";

const app = express();
const router = express.Router();

app.locals.litNodeClient = new LitJsSdk.LitNodeClient({
  alertWhenUnauthorized: false,
});
await app.locals.litNodeClient.connect();

router.post('/', async (req, res) => {
  const authSig = req.body.authSig;
  console.log(authSig);

  const chain = "mumbai";

  const accessControlConditions = [
    {
      contractAddress: "",
      standardContractType: "",
      chain: "mumbai",
      method: "eth_getBalance",
      parameters: [":userAddress", "latest"],
      returnValueTest: {
        comparator: ">=",
        value: "1000000000000", // 0.000001 ETH
      },
    },
  ];

  const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
    "this is a secret message"
  );

  const encryptedSymmetricKey = await app.locals.litNodeClient.saveEncryptionKey({
    accessControlConditions,
    symmetricKey,
    authSig,
    chain,
  });

  console.warn("encryptedSymmetricKey", encryptedSymmetricKey)

  const decryptedString = await LitJsSdk.decryptString(
    encryptedString,
    symmetricKey
  );

  res.send({
    encryptedString,
    symmetricKey,
    decryptedString
  });
})


export default router;