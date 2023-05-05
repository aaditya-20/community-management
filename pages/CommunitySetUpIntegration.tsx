declare var window: any;
import Link from "next/link";
import { IntegrationOption } from "../components/molecules/IntegrationOption";
import {
  FaDiscord,
  FaTwitter,
  FaTelegram,
  FaEthereum,
  FaTelegramPlane,
} from "react-icons/fa";
import { VscBlank } from "react-icons/vsc";
import IconButton from "../components/atoms/IconButton";
import BackGroundPage from "@/components/molecules/BackGroundPage";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WalletAuth from "@/utils/authentication/walletAuth";
import FormData from "@/utils/FormData";
import { supabase } from "@/utils/supabaseClient";
import { Modal } from "@material-ui/core";
import AlreadyAdminPopup from "./AlreadyAdminPopup";
function CommunitySetUpIntegration() {
  const [flagDiscord, setDiscord] = useState("hidden");
  const [flagTwitter, setTwitter] = useState("hidden");
  const [flagTelegram, setTelegram] = useState("hidden");
  const [flagEthereum, setEthereum] = useState("hidden");
  const [walletAddress, setWalletAddress] = useState("");
  const obj = FormData();
  const router = useRouter();
  const onConnect = WalletAuth();
  function discordToken(){
    // // console.log(window.location.href);
    // const fragment = new URLSearchParams(window.location.hash.slice(1));
    // const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
    // localStorage.setItem('accessToken', accessToken||'');
    // fetch('https://discord.com/api/users/@me', {
    //   headers: {
    //       authorization: `${tokenType} ${accessToken}`,
    //   },
    //   })
    //   .then(result => result.json())
    //   .then(response => {
    //       console.log(response);
    //       const { username, discriminator, avatar, id} = response;
    //       let profile={
    //         username: username,
    //         discriminator: discriminator,
    //         avatar: avatar,
    //         id: id
    //       }
    //       localStorage.setItem('profile', JSON.stringify(profile));

    //   })
    //   .catch(console.error);
    //   fetch('https://discord.com/api/users/@me/guilds', {
    //   headers: {
    //       authorization: `${tokenType} ${accessToken}`,
    //   },
    //   })
    //   .then(result => result.json())
    //   .then(response => {
    //       //console.log(response)
    //       let c=0;
    //       response.forEach((element: any) => {
    //         console.log(element.name);
    //         if(element.name == "Midjourney"){
    //           c++;
    //           console.log("found");
              
    //         }else{
    //           console.log("not found");
             
    //         }
    //       });
    //       if(c>0){
    //         console.log("found");
    //         localStorage.setItem('bool_value', 'true');
    //       }else{
    //         console.log("not found here");
    //         localStorage.setItem('bool_value', 'false');
    //       }
    //     }).catch(console.error);
    if (flagDiscord == "hidden") {
      if (localStorage.getItem("profile")) {
        
        setDiscord("visible");
        return;
      }else{
        if(window.location.href.includes("access_token")){
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    console.log(fragment);
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
    localStorage.setItem('accessToken', accessToken||'');
    fetch('https://discord.com/api/users/@me', {
      headers: {
          authorization: `${tokenType} ${accessToken}`,
      },
      })
      .then(result => result.json())
      .then(response => {
          //console.log(response);
          const { username, discriminator, avatar, id,email} = response;
          let profile={
            username: username,
            discriminator: discriminator,
            avatar: avatar,
            id: id,
            email: email
          }
          localStorage.setItem('profile', JSON.stringify(profile));
          if (localStorage.getItem("profile")) {
        
            setDiscord("visible");
          }

      })
      .catch(console.error);
      }
    }}
  }

  useEffect(() => {
    getCurrentWalletConnected();


    // addWalletListener();
  }, [walletAddress]); 
  useEffect(() => {
    discordToken();
    

    // addWalletListener();
  }, []);

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
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
          setEthereum('visible');
        }
         else {
          console.log("Connect to MetaMask using the Connect button");
        }

      } catch (err) {
        console.error(err);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };


  async function handleEthereumClick() {
    await connectWallet();
    try {
      setEthereum("visible");
    } catch (e) {
      console.log(e);
    }
  }

  function handleDiscordClick() {

    if (flagDiscord == "hidden") {
      if (localStorage.getItem("profile")) {

        setDiscord("visible");
        return;
      }
      const redirectUri = encodeURIComponent(
        "http://localhost:3000/CommunitySetUpIntegration"
      );
      const clientId = "1101935237652557855";
      const scope = encodeURIComponent("identify");
      const authUrl = `https://discord.com/api/oauth2/authorize?client_id=1080905971804668005&redirect_uri=https%3A%2F%2Ffirebond-client-lzpmgo97f-firebond-admin-team.vercel.app%2FCommunitySetUpIntegration&response_type=token&scope=identify%20guilds%20email`;
      const lauthUrl="https://discord.com/api/oauth2/authorize?client_id=1080905971804668005&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FCommunitySetUpIntegration&response_type=token&scope=identify%20guilds%20email"

      window.location.href = lauthUrl;
    }
  }

  function handleTwitterClick() {
    if (flagTwitter == "hidden") {
      setTwitter("visible");
    }
  }
  function handleTelegramClick() {
    if (flagTelegram == "hidden") {
      setTelegram("visible");
    }
  }

  async function handleContinue() {
    obj.wallet_id = walletAddress;
    
    const { data, error } = await supabase.from("community_data").insert({
      name : obj.name,
      community_name : obj.community_name,
      community_description : obj.community_description,
      email : obj.email,
      wallet_id : obj.wallet_id
    });
    if (error) {
      console.log("Error uploading file:", error.message);
      console.log("Admin Account Exist")
      AlreadyAdmin();

    } else {
      await window.localStorage.setItem("data", JSON.stringify(obj));
      console.log("File uploaded successfully:", data);
      router.push("/WelcomeScreen1");
    }
  }
  const [OpenAlreadyAdminPopup, setOpenAdmin] = useState(false);
  function AlreadyAdmin() {
    setOpenAdmin(!OpenAlreadyAdminPopup);
  }
  return (
    <>
      <Modal
        onClose={() => {
          setOpenAdmin(!OpenAlreadyAdminPopup);
        }}
        open={OpenAlreadyAdminPopup}
        style={{}}
      >
        <div>
          <AlreadyAdminPopup />
        </div>
      </Modal>
      <div className="flex items-center justify-center ">
        <BackGroundPage className="flex items-center justify-center bg-[#171C23] h-[100vh] w-[100vw]" />
        pnp
        <div className="absolute w-[662px] h-[700px] top-[120px]  bg-[#232B35] shadow-md">
          <div className="absolute w-[662px] h-[54px]  border-b-[1px] border-[#353B43]">
            <Link
              href="/"
              className="relative top-[15px] left-[30px] text-[#AEABD8]"
            >
              COMMUNITY SETUP
            </Link>
            <div className="absolute font-['Roboto'] font-[13px] left-[410px] top-[13px] text-[#FE702A]">
              STEP 2 OF 2
            </div>
            <div className="absolute bg-[#FE702A] h-[12px] w-[108px] top-[19px] left-[520px] border-solid border-[1.5px] border-[#FE702A]"></div>
          </div>

          <div className="absolute font-[600] top-[78px] left-[30px]  font-['General Sans'] text-white text-[24px] w-[662px] ">
            <p className=" font-[600]  font-['General Sans'] text-white text-[24px]  ">
              Integrations
            </p>
            <p className="   font-['General Sans'] text-[#A6A6A6] text-[16px] font-[400 ]  ">
              Supercharge your workflow and connect the tool you use every day.
            </p>
          </div>

          <div className="absolute top-[200px] left-[30px]">
            <IntegrationOption
              Icon={FaDiscord}
              IconSize={20}
              IconColor="white"
              CapName="Discord"
              SmallName="discord"
              IconBackgroundStyle="bg-[#6359E9]"
              handleClick={handleDiscordClick}
              visibility={flagDiscord}
            />
          </div>
          <div className="absolute top-[290px] left-[30px]">
            <IntegrationOption
              Icon={FaTwitter}
              IconSize={20}
              IconColor="white"
              CapName="Twitter"
              SmallName="twitter"
              IconBackgroundStyle="bg-[#64CFF6]"
              handleClick={handleTwitterClick}
              visibility={flagTwitter}
            />
          </div>
          <div className="absolute top-[380px] left-[30px]">
            <IntegrationOption
              Icon={FaTelegramPlane}
              IconSize={20}
              IconColor="white"
              CapName="Telegram"
              SmallName="telegram"
              IconBackgroundStyle="bg-[#2298D5]"
              handleClick={handleTelegramClick}
              visibility={flagTelegram}
            />
          </div>
          <div className="absolute top-[470px] left-[30px]">
            <IntegrationOption
              Icon={FaEthereum}
              IconSize={25}
              IconColor="white"
              CapName="Ethereum"
              SmallName="ethereum"
              IconBackgroundStyle="bg-[#1D1D1D]"
              handleClick={handleEthereumClick}
              visibility={flagEthereum}
            />
          </div>

          {/* <div> */}

          <IconButton
            icon={VscBlank}
            label="Back"
            className="absolute bg-[#1D1D1D] bottom-[0px] w-[331px] h-[67px]"
            classNameIcon=""
            onClick={() => router.push("/Step1CommunitySetup")}
          />
          <IconButton
            icon={VscBlank}
            label="Continue"
            className="absolute bg-[#FE702A] bottom-[0px] left-[331px] w-[331px] h-[67px]"
            classNameIcon=""
            onClick={handleContinue}
          />

          {/* </div>    */}
        </div>
      </div>
    </>
  );
}

export default CommunitySetUpIntegration;
