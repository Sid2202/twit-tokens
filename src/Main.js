import React from "react";
import Usertweet from "./Usertweet";
import {
  useMetamask,
  useAddress,
} from "@thirdweb-dev/react";

function Main() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  return (
    <div className="flex-column bg-black text-white">
      {!address ? (
        <div className="flex flex-col w-full h-screen  bg-black py-20 justify-center items-center">
          <p className="text-center text-white text-3xl font-extrabold py-5">
            Welcome to Twitter-NFTs
          </p>
          <p className="text-center text-white text-xl py-3 font-lg">
            Convert your tweets into NFTs!
          </p>
          <div className="mt-10 text-black">
            <button
              className="rounded-full bg-white px-4 py-3"
              onClick={connectWithMetamask}
            >
              <p className="">Connect Metamask Wallet</p>
            </button>
          </div>
        </div>
      ) : (
        <Usertweet />
      )}
    </div>
  );
}

export default Main;
