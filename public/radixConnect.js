"use client";

import React, {useEffect} from "react";

import {
    RadixDappToolkit,
    ManifestBuilder,
    Decimal,
    Bucket,
    Expression,
    ResourceAddress,
  } from "@radixdlt/radix-dapp-toolkit";
  // There are four classes exported in the Gateway-SDK These serve as a thin wrapper around the gateway API
  // API docs are available @ https://betanet-gateway.redoc.ly/
  import {
    TransactionApi,
    StateApi,
    StatusApi,
    StreamApi,
  } from "@radixdlt/babylon-gateway-api-sdk";
  import {updateAll} from './apiDataFetcher.js'



 let DefiFundsComponentAddress =  "component_tdx_b_1qff3l8hj4le2nppf6yzgn293rj9g7yyu7v079gfq4h5sv60qxz";
let DefiFundsAdminBadge =  "resource_tdx_b_1qpf3l8hj4le2nppf6yzgn293rj9g7yyu7v079gfq4h5sxmawre";

  // Configure the connect button



let accountAddress;
// export function rdt {
 const  rdt = RadixDappToolkit(
    {
        dAppDefinitionAddress:
        "account_tdx_b_1pplsymjqavhw82vkw69h6zkj5r2gzrh47lvdd0s8h0jseu8sqt",
        dAppName: "defifunds",
      },
      (requestData) => {

          requestData({
              accounts: { quantifier: "atLeast", quantity: 1 },
          }).map(({ data: { accounts } }) => {
              // add accounts to dApp application state
              // console.log("account data: ", accounts);
              accountAddress = accounts[0].address;
              updateAll(accountAddress)
              
          });
      },
      { networkId: 11 }
      );
  
  // Instantiate Gateway SDK
  const transactionApi = new TransactionApi();
  const stateApi = new StateApi();
  const statusApi = new StatusApi();
  const streamApi = new StreamApi();
  
  // ************ Send Manifest*************
async function sendManifest(manifest) {
    // Send manifest to extension for signing
    const result = await rdt.sendTransaction({
      transactionManifest: manifest,
      version: 1,
    });
    if (result.isErr()) throw result.error;
    // console.log("Result: ", result.value);
  
    // Fetch the transaction status from the Gateway API
    let status = await transactionApi.transactionStatus({
      transactionStatusRequest: {
        intent_hash_hex: result.value.transactionIntentHash,
      },
    });

    // console.log(" TransactionApi transaction/status:", status);
  
    // fetch component address from gateway api and set componentAddress variable
    let commitReceipt = await transactionApi.transactionCommittedDetails({
      transactionCommittedDetailsRequest: {
        transaction_identifier: {
          type: "intent_hash",
          value_hex: result.value.transactionIntentHash,
        },
      },
    });
    // console.log("Committed Details Receipt", commitReceipt);
  
    return { status, commitReceipt };
  }



  export {DefiFundsComponentAddress, DefiFundsAdminBadge, accountAddress, rdt, sendManifest}