"use client";

import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  // RadixDappToolkit,
  ManifestBuilder,
  Decimal,
  Bucket,
  Expression,
  // ResourceAddress,
  String,
} from "@radixdlt/radix-dapp-toolkit";
import { addr } from "public/helperFunctions.js";
import { sendManifest, accountAddress } from "public/radixConnect.js";
import { DefiFundsComponentAddress } from "public/radixConnect.js";

export default function NewFund() {
  // throw new Error("failed to load data")
  const [fundName, setFundName] = useState("");
  const [initialSupply, setInitialSupply] = useState("");
  const [description, setDescription] = useState("");
  const [imagelink, setImagelink] = useState("");
  const [websitelink, setWebsitelink] = useState("");
  const [depositFee, setDepositFee] = useState("");

  async function handleSubmitNewFund() {
    console.log("HandleSubmit");
    console.log(accountAddress);
    // console.log(addr.XRD)
    // console.log(DefiFundsComponentAddress)

    let manifest = new ManifestBuilder()
      .withdrawFromAccountByAmount(accountAddress, initialSupply, addr.XRD)
      .takeFromWorktopByAmount(initialSupply, addr.XRD, "xrd_bucket")
      .callMethod(DefiFundsComponentAddress, "new_fund", [
        String(fundName),
        Bucket("xrd_bucket"),
        Decimal(initialSupply),
        String(description),
        String(imagelink),
        String(websitelink),
      ])
      .callMethod(accountAddress, "deposit_batch", [
        Expression("ENTIRE_WORKTOP"),
      ])
      .build()
      .toString();
    // console.log("HandleSubmit");
    // console.log("Manifest: ", manifest);
    const { commitReceipt } = await sendManifest(manifest);
  }

  return (
    <div className="h-fit flex align-middle justify-center overflow-hidden w-screen">
      <div className="w-11/12 h-fit mt-28 new-fund bg-gray-100 rounded-xl shadow-lg mb-20 overflow-x-hidden">
        <div className="text-semiboldbg-gray-100 flex justify-center align-middle text-3xl mt-10">
          <h1>Create new fund</h1>
        </div>
        <div className="">
          <div className="flex align-middle justify-between sm:flex-row flex-col mb-10 mt-10 ml-6 mr-6 gap-5">
            <label className="flex flex-col sm:w-1/2 w-full">
              Fund Name
              <input
                type="text"
                onChange={(e) => setFundName(e.target.value)}
                placeholder="Name of your fund"
              />
            </label>

            <label className="flex flex-col sm:w-1/4 w-full">
              <div className="flex">
                Initial Supply
                <AiOutlineInfoCircle />
              </div>
              <input
                type="text"
                onChange={(e) => setInitialSupply(e.target.value)}
                placeholder="Enter Value"
                pattern="^[0-9,.-]*$"
              />
            </label>

            <label className="flex flex-col sm:w-1/4 w-full">
              <div className="flex">
                Deposit fee
                <AiOutlineInfoCircle />
              </div>

              <input
                type="text"
                onChange={(e) => setDepositFee(e.target.value)}
                placeholder="Enter Value"
                pattern="^[0-9,.-]*$"
              />
            </label>
          </div>
          <label className="flex flex-col ml-6 mr-6">
            Fund Strategy
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your fund strategy"
            />
          </label>

          <div className="flex mt-10 mb-10 align-middle sm:flex-row flex-col justify-between ml-6 mr-6 gap-5">
            <label className="flex flex-col sm:w-1/2 w-full">
              <div className="flex">
                Logo
                <AiOutlineInfoCircle />
              </div>
              <input
                type="text"
                onChange={(e) => setImagelink(e.target.value)}
                placeholder="Logo for the fund"
              />
            </label>
            <label className="flex flex-col sm:w-1/2 w-full">
              Website
              <input
                type="text"
                onChange={(e) => setWebsitelink(e.target.value)}
                placeholder="Add Link to Website"
              />
            </label>
          </div>
          <div className="flex align-middle justify-center">
            <button
              onClick={() => handleSubmitNewFund()}
              className="bg-primary h-20 rounded-lg text-lg text-white w-11/12 mb-10"
            >
              Create Fund
            </button>
          </div>
        </div>
      </div>
      {/* <h1 className=" text-6xl text-black mt-10">
          Create New Fund
        </h1> */}
    </div>
  );
}
