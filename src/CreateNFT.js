import React from "react";
import { useEffect } from 'react';
import { useNFTCollection } from "@thirdweb-dev/react";
import {useAddress} from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
//const fs = require("fs");
function CreateNFT(props) {
  const { id } = useParams();

  const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      "636efb15d46b8504246e0ab24f106157ed6ef890da2a48964f7832acbee45071",
      ethers.getDefaultProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/OmVPtCazAi65zwpNUDyPQJufQkP9ufm2"
      )
    )
  );
  


  
  
  return (
    <div className="w-full h-screen">
      
      <h2>{id}</h2>
      <form>
        Your bid: <input type="number" />
        <button type="button"  >Mint!</button>
      </form>

      
    </div>
  );
}

export default CreateNFT;
