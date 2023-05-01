import { FaDiscord, FaTwitter } from "react-icons/fa";
import { VscBlank } from "react-icons/vsc";
import { supabase } from "@/utils/supabaseClient";
import IconButton from "../components/atoms/IconButton";
import ProfileIcon from "../components/atoms/ProfileAvatar";
import BackGroundPage from "../components/molecules/BackGroundPage";
import { ReactElement, useState } from "react";
import Card from "../components/atoms/Card";
import DiscordIntegrationPopup from "./DiscordIntegrationPopup";
import Link from "next/link";
import TextInput from "../components/atoms/TextInput";
import Popup from "reactjs-popup";
import Modal from "@material-ui/core/Modal";

const CommunitySetupScreen = (): ReactElement => {
  const [InputValue, setInputvalue] = useState("");
  const [OpenDiscord, setOpenDiscord] = useState(false);
  function onContinueClick() {
    setOpenDiscord(!OpenDiscord);
  }

  function handleProfileClick() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".png, .jpg, .jpeg";
    input.hidden = true; // Add the hidden attribute
    let files: File[];
    input.addEventListener("change", async () => {
      const files = input.files;
      console.log(files);
      if (files && files.length > 0) {
        console.log(files[0]);
        let file: File;
        file = files[0];
        if (!file) {
          return;
        }
        console.log(file.name);
        // from here we can send image to supabase storage.

        const { data, error } = await supabase.storage
          .from("images")
          .upload(file.name, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) {
          console.log("Error uploading file:", error);
        } else {
          console.log("File uploaded successfully:", data);
        }
      } else {
        return;
      }
    });
    input.click();
  }

  function handleInput(e: any) {
    setInputvalue(e.target.value);
  }
  console.log("NAME-> ", InputValue);

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
        <div className="absolute left-[-100px] top-[-150px]">
          <DiscordIntegrationPopup />
        </div>
      </Modal>
      <Card title="" text="" />

      <div className="absolute w-[662px] h-[54px] left-[350px] top-[140px] border-b-[1px] border-[#353B43]">
        <Link
          href="/"
          className="relative top-[15px] left-[30px] text-[#AEABD8]"
        >
          SIGN UP
        </Link>
      </div>
      <div className="absolute  left-[350px] top-[220px]">
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
          className="relative top-[-25px] left-[154px] w-[426px] h-[41px]"
          classNameInput="w-[426px] h-[41px] bg-[#2E363F] rounded-lg text-white font-[General Sans] font-medium"
          classNameLabel="font-medium text-base leading-6 text-white font-[General Sans] w-[85px] h-[22px]"
          handleChange2={handleInput}
          handleValue={InputValue}
        />

        <IconButton
          icon={FaDiscord}
          label="Discord"
          className="relative bg-[#8570E4] top-[89px] left-[0px] w-[331px] h-[67px]"
          classNameIcon=""
        />
        <IconButton
          icon={VscBlank}
          label="Continue"
          className="relative bg-[#FE702A] top-[22px] left-[331px] w-[331px] h-[67px]"
          classNameIcon=""
          onClick={onContinueClick}
        />
      </div>
      <p className="absolute font-[General Sans] left-[600px] top-[600px] font-normal text-base leading-6 text-white font-generalsans">
        Already have account?{" "}
        <Link href="/" className="font-[General Sans] text-[#A6A6A6CC]">
          Sign in
        </Link>
      </p>
    </>
  );
};

export default CommunitySetupScreen;
