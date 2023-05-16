declare var window: any;
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import router from "next/router";
import React, { use, useState } from "react";
import InstallMetamaskPopup from "./InstallMetamaskPopup";
import { Modal } from "@material-ui/core";

const UserCard = [
  {
    title: "Connect your wallet",
    button: "Connect",
  },
  {
    title: "Connect your Twitter",
    button: "Connect",
  },
  {
    title: "Connect your Discord",
    button: "Connect",
  },
];
// you will recieve communityId in props
const UserAuthCard = (props:any) => {
  const [verified, setVerified] = useState(UserCard.map(() => false));
  const [email, setEmail] = useState("");
  const [wallet, setWalletAddress] = useState("");
  const [flag,setFlag] = useState(false);
 
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
   
      } catch (err) {

        console.error(err);
      }
      UserCard[0].button = "Connected";
      setFlag(!flag); 

    } else {
      /* MetaMask is not installed */
      console.log("Please install my MetaMask");
      Metamask();

    }
  };
  async function handleSubmit() {

    const { data, error } = await supabase.from("userdata").insert({
      wallet_id: wallet,
    });
    if (error) {
      console.log("Error uploading file:", error.message);
    } else {
      await window.localStorage.setItem("data", JSON.stringify(data));
      console.log("File uploaded successfully:", data);
      router.push("/YourSpace");
    }
  }
  async function handleclick() {
    await connectWallet();
    try {
      // setEthereum("visible");
    } catch (e) {
      console.log(e);
    }
  }

  const [InstallMeta, setMetamask] = useState(false);
  function Metamask() {
    setMetamask(!InstallMeta);
  }

  return (
    <>
      <Modal
        onClose={() => {
          setMetamask(!InstallMeta);
        }}
        open={InstallMeta}
        style={{}}
      >
        <div>
          <InstallMetamaskPopup />
        </div>
      </Modal>
      <div className="ml-[23px] w-[598px] h-auto bg-[#232B35] rounded-[15.4264px] p-6">
        <div className="w-full h-auto">
          <h1 className="font-semibold text-white text-[18px] leading-[24px]">
            Verification
          </h1>
          <p className="font-normal text-sm text-[#D9D9D9] mt-[10.09px] mb-[21.56px]">
            Complete the below steps to get verified
          </p>
          <div className="w-full h-0 border-[0.771319px] border-[#454545] mb-[28.93px]"></div>

          {UserCard.map((card, index) => (
            <div
              key={index}
              className="w-full flex justify-between items-center mb-[35.75px]"
            >
              <div className="flex gap-[31.5px] items-center justify-center">
                <div className="w-[19.5px] h-[19.5px] border-[0.848604px] border-white rounded-full box-border flex justify-center items-center">
                  {verified[index] ? (
                    <div className="w-[13.65px] h-[13.65px] bg-white rounded-full flex justify-center items-center">
                      <Image
                        src="Icons/tick.svg"
                        alt=""
                        height={6.83}
                        width={6.83}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <h1 className="font-medium text-[18px] text-white leading-[24px] font-open-sans">
                  {card.title}
                </h1>
              </div>
              <button
                className={`border-[0.713229px] ${
                  card.button === "Connected" ? "bg-[white]" : " "
                } border-[#929292] rounded-[7.13229px] px-[23.88px] py-[9.31px]  text-[14.2646px] text-[#FE702A] font-medium`}
                onClick={handleclick}
              >
                {card.button}
              </button>
            </div>
          ))}

          <div className="w-full flex justify-between items-center mb-[35.75px]">
            <div className="flex gap-[31.5px] items-center justify-center">
              <div className="w-[19.5px] h-[19.5px] border-[0.848604px] border-white rounded-full box-border flex justify-center items-center">
                {email ? (
                  <div className="w-[13.65px] h-[13.65px] bg-white rounded-full flex justify-center items-center">
                    <Image
                      src="Icons/tick.svg"
                      alt=""
                      height={6.83}
                      width={6.83}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <h1 className="font-medium text-[18px] text-white leading-[24px] font-open-sans">
                Please provide your email ID
              </h1>
            </div>
          </div>
          <div className="ml-[50px] bg-[#202127] text-[#8A8A8A] rounded-[6.35055px] w-[499.63px] overflow-hidden ">
            <input
              className=" w-full h-full outline-none overflow-hidden text-ellipsis px-[15.22px] py-[14.14px] bg-inherit"
              placeholder="enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-[35.42px] w-full flex justify-end">
            <button
              onClick={handleSubmit}
              className="w-[116.41px] h-[38.44px] bg-gradient-to-r from-[#FD241C] to-[#FE702A] flex justify-center items-center text-white text-[15.769px] font-medium leading-[21px] rounded-[7.16772px]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAuthCard;
