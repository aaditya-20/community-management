import { FaDiscord, FaTwitter } from "react-icons/fa";
import { VscBlank } from "react-icons/vsc";
import { supabase } from "@/utils/supabaseClient";
import IconButton from "../components/atoms/IconButton";
import ProfileIcon from "../components/atoms/ProfileAvatar";
import BackGroundPage from "../components/molecules/BackGroundPage";
import { ReactElement, useState,useEffect } from "react";
import Card from "../components/atoms/Card";
import DiscordIntegrationPopup from "./DiscordIntegrationPopup";
import Link from "next/link";
import TextInput from "../components/atoms/TextInput";
import EmailInput from "../components/atoms/EmailInput";
import Popup from "reactjs-popup";
import Modal from "@material-ui/core/Modal";
import FormData from "@/utils/FormData";

const CommunitySetupScreen = (): ReactElement => {
  const obj = FormData();
  const [InputValue, setInputvalue] = useState("");
  const [InputEmail, setInputemail] = useState("");
  const [OpenDiscord, setOpenDiscord] = useState(false);
  async function onContinueClick() {
    setOpenDiscord(!OpenDiscord);
    obj.name = InputValue;
    
    obj.email = InputEmail;
  }
  const bucket_name = "Store";
  async function handleProfileClick() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".png, .jpg, .jpeg";
    input.hidden = true;
    input.addEventListener("change", async () => {
      const files = input.files;
      if (files && files.length > 0) {
        const file = files[0];
        console.log(file);
        const { data, error } = await supabase.storage
          .from(bucket_name)
          .upload(`community_admin/${file.name}`, file, {
            cacheControl: "3600",
            upsert: false,
          });
        if (error) {
          console.error(error);
        } else {
          console.log(data);
        }
      }
    });
    input.click();
  }

  function handleInput(e: any) {
    setInputvalue(e.target.value);
  }
  function handleEmail(e: any) {
    setInputemail(e.target.value);
  }
  function discordToken(){
    // console.log(window.location.href);
     if((window.location.href).includes("access_token")){
    const fragment = new URLSearchParams(window.location.hash.slice(1));
   
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
    console.log(fragment,"fragment",accessToken,tokenType);
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
            email: email,
            username: username,
            discriminator: discriminator,
            avatar: avatar,
            id: id
          }
          localStorage.setItem('profile', JSON.stringify(profile));
      })
      .catch(console.error);
     
  }}
  function discord(){
    const redirectUri = encodeURIComponent(
      "http://localhost:3000/CommunitySetupScreen"
    );
    const clientId = "1101935237652557855";
    const scope = encodeURIComponent("identify");
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=1080905971804668005&redirect_uri=https%3A%2F%2Ffirebond-client-lzpmgo97f-firebond-admin-team.vercel.app%2FCommunitySetupScreen&response_type=token&scope=identify%20guilds%20email`;
    const lauthUrl=`https://discord.com/api/oauth2/authorize?client_id=1080905971804668005&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FCommunitySetupScreen&response_type=token&scope=identify%20guilds%20email`  

    window.location.href = lauthUrl;
  }
  useEffect(() => {
    discordToken();
  });

  return (
    <>
      <BackGroundPage />
      <Modal
        onClose={() => {
          setOpenDiscord(!OpenDiscord);
        }}
        open={OpenDiscord}
        style={{}}
      >
        <div className="">
          <DiscordIntegrationPopup />
        </div>
      </Modal>
      <div className="flex items-center justify-center ">
        <div className="absolute block w-[662px] h-[431px] top-[20vh] bg-gray-800 shadow-md ">
          <div className="relative block w-[662px] h-[54px] border-b-[1px] border-[#353B43]">
            <Link
              href="/"
              className="relative top-[15px] left-[30px] text-[#AEABD8]"
            >
              SIGN UP
            </Link>
          </div>
          <div className="relative">
            <p className="relative w-[236px] h-[32px] top-[0px] left-[30px] text-[#FFFFFF] font-sans font-normal font-bold:text-600 text-2xl leading-8">
              What do we call you?
            </p>
            <p className="relative w-[200px] h-[22px] top-[10px] left-[30px] font-sans font-normal text-base leading-6 text-gray-500">
              Tell us your name?
            </p>
            <div className="relative top-[105px] left-[53px] font-[Roboto] font-bold text-[#848484] w-[13.54px] h-[27.88px] text-[28px]">
              +
            </div>
            <ProfileIcon
              size={94}
              imageUrl="/Icons/DefaultUserIcon.png"
              alt="nothing"
              classNameCircle=" relative top-[50px] left-[30px] border-dashed border-[0.7px] border-white"
              classNameImage="relative left-[22px] top-[26px] w-[51.6px] h-[42.24px]"
              onProfileIconClick={handleProfileClick}
            />
            <TextInput
              placeholder="Name"
              label="Enter Name"
              className="relative top-[-80px] left-[154px] w-[426px] h-[41px]"
              classNameInput="w-[426px] h-[41px] bg-[#2E363F] rounded-lg text-white font-[General Sans] font-medium"
              classNameLabel="font-medium text-base leading-6 text-white font-[General Sans] w-[85px] h-[22px]"
              handleChange2={handleInput}
              handleValue={InputValue}
            />
            <EmailInput
              placeholder="Email"
              label="Enter Email"
              className="relative top-[-40px] left-[154px] w-[426px] h-[41px]"
              classNameInput="w-[426px] h-[41px] bg-[#2E363F] rounded-lg text-white font-[General Sans] font-medium"
              classNameLabel="font-medium text-base leading-6 text-white font-[General Sans] w-[85px] h-[22px]"
              handleChange2={handleEmail}
              handleValue={InputEmail}
            />
            <IconButton
              icon={FaDiscord}
              label="Discord"
              className="relative bg-[#8570E4] top-[89px] left-[0px] w-[331px] h-[67px]"
              classNameIcon=""
              onClick={discord}
            />
            <IconButton
              icon={VscBlank}
              label="Continue"
              className="relative bg-[#FE702A] top-[22px] left-[331px] w-[331px] h-[67px]"
              classNameIcon=""
              onClick={onContinueClick}
            />
          </div>
          <p className="relative text-center my-[30px] font-[General Sans] font-normal text-base leading-6 text-white font-generalsans">
            Already have account?{" "}
            <Link href="/" className="font-[General Sans] text-[#A6A6A6CC]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CommunitySetupScreen;
