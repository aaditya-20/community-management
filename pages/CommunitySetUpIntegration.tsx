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
import { useState } from "react";
import { useRouter } from "next/router";
function CommunitySetUpIntegration() {
  const [flagDiscord, setDiscord] = useState("visible");
  const [flagTwitter, setTwitter] = useState("hidden");
  const [flagTelegram, setTelegram] = useState("hidden");
  const [flagEthereum, setEthereum] = useState("hidden");
  const router = useRouter();

  function handleDiscordClick() {
    const redirectUri = encodeURIComponent(
      "https://firebond-client-iwa2wdp0f-firebond-admin-team.vercel.app/Step1CommunitySetup"
    );
    const clientId = "1101935237652557855";
    const scope = encodeURIComponent("identify");
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

    window.location.href = authUrl;
  }
  // Discord data fetch....to be completed
  // fetch("https://discord.com/api/users/@me", {
  //   headers: {
  //     Authorization: `Bearer ${ACCESS_TOKEN}`,
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

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
  function handleEthereumClick() {
    const redirectUri = encodeURIComponent(
      "https://your-application-url.com/auth/callback"
    );
    const clientId = "YOUR_CLIENT_ID";
    const authUrl = `https://id.metamask.io/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;

    window.location.href = authUrl;

    if (flagEthereum == "hidden") {
      setEthereum("visible");
    }
  }
  return (
    <>
      <div className="flex items-center justify-center ">
        <BackGroundPage className="flex items-center justify-center bg-[#171C23] h-[100vh] w-[100vw]" />

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
            onClick={() => router.push("/WelcomeScreen1")}
          />

          {/* </div>    */}
        </div>
      </div>
    </>
  );
}

export default CommunitySetUpIntegration;
