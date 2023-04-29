import { FaDiscord } from "react-icons/fa";
import Card from "../components/atoms/Card";
import IconButton from "../components/atoms/IconButton";
import ProfileIcon from "../components/atoms/ProfileAvatar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DiscordIntegrationPopup() {
  const router = useRouter();
  function handleProfileClick() {}
  function discordlink() {
    const redirectUri = encodeURIComponent(
      "https://firebond-client-iwa2wdp0f-firebond-admin-team.vercel.app/Step1CommunitySetup"
    );
    const clientId = "1101935237652557855";
    const scope = encodeURIComponent("identify");
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

    window.location.href = authUrl;
  }


  // to complete
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

  return (
    <>
      <Card
        className="absolute w-[600px] h-[600px] left-[466px] top-[176px] bg-[#161616]"
        title=""
        text=""
      />
      <Link
        href="/"
        className="absolute left-[487px] top-[196px] text-[#FFFFFF] text-3xl"
      >
        <AiOutlineArrowLeft />
      </Link>
      <div className=" absolute left-[608px] top-[230px] w-[397px] h-[32px] text-[#FFFFFF] font-[General sans] font-[600] font-[24px] text-3xl leading-normal ">
        <p>Link your Discord account</p>
      </div>
      <div className="absolute left-[658px] top-[280px] w-[397px] h-[32px] text-[#A6A6A6] font-[General Sans]">
        <p>works better with Discord connected</p>
      </div>
      <div className="absolute left-[670px] top-[370px]">
        <ProfileIcon
          imageUrl="Icons/RedFire.svg"
          size={87}
          classNameCircle="border-dashed border-[0.7px] border-white flex justify-center"
          onProfileIconClick={handleProfileClick}
        />
      </div>
      <div className="absolute h-[6px] w-[73px] left-[756px] top-[410px] bg-[#3D3E45]"></div>
      <div className="absolute left-[830px] top-[370px]">
        <ProfileIcon
          imageUrl="Icons/Discord.svg"
          size={87}
          classNameCircle="border-dashed border-[0.7px] border-white flex justify-center"
          onProfileIconClick={handleProfileClick}
        />
      </div>
      <div className="flex-wrap absolute flex justify-center left-[560px] top-[530px] w-[500px] h-[32px] text-[#A6A6A6] font-[General Sans] ">
        Get special access with your Discord roles <br />
        Receive task updates directly in Discord
      </div>
      <div className="absolute top-[620px] left-[645px] ">
        <IconButton
          icon={FaDiscord}
          label="Discord"
          className="absolute bg-[#8570E4] top-[20px] left-[30px] w-[240px] h-[50px] rounded-md"
          classNameIcon=""
          onClick={discordlink}
        />
      </div>
      <div className="absolute top-[720px] left-[775px]">
        <button
          onClick={() => router.push("/Step1CommunitySetup")}
          className="bg-[#161616] text-[#A6A6A6] text-sm px-2 py-1 rounded-md"
        >
          Skip
        </button>
      </div>
    </>
  );
}
