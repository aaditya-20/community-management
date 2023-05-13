import { FaDiscord, FaTwitter } from "react-icons/fa";
import { VscBlank } from "react-icons/vsc";
import IconButton from "../components/atoms/IconButton";
import ProfileIcon from "../components/atoms/ProfileAvatar";
import BackGroundPage from "../components/molecules/BackGroundPage";
import { supabase } from "@/utils/supabaseClient";
import { ReactElement } from "react";
import Card from "../components/atoms/Card";
import Link from "next/link";
import TextInput from "../components/atoms/TextInput";
import TextArea from "../components/atoms/TextArea";
import Temporary from "../components/atoms/Stepper";
import { useState } from "react";
import { useRouter } from "next/router";
import FormData from "@/utils/FormData";
import Modal from "@material-ui/core/Modal";
import TwitterHandlePopUp from "@/components/molecules/TwitterHandlePopUp";
const Step1CommunitySetup = (): ReactElement => {
  const obj = FormData();
  const router = useRouter();
  const [InputValue, setInputvalue] = useState("");
  const [description, setDescription] = useState("");
  const [TwitterHandle, setTwitterHandle] = useState("");
  const [WebsiteUrl, setWebsiteUrl] = useState("");
  const [TwitterPopUpVisibility, setTwitterPopUpVisibility] = useState(false);
  const [WebsitePopUpVisibility, setWebsitePopUpVisibility] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  let community_logo = "";
  let file: File;
  function handleProfileClick() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".png, .jpg, .jpeg";
    input.hidden = true;
    let files: File[];
    input.addEventListener("change", async () => {
      const files = input.files;
      console.log(files);
      if (files && files.length > 0) {
        console.log(files[0]);
        let file: File;
        file = files[0];
        console.log(file.name);
      }
    });
    input.click();
  }
  async function CommunityLogoUpload(file: any) {
    const { data, error } = await supabase.storage
      .from("community_logo")
      .upload(`${obj.email}` , file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) {
      console.log("Error uploading file:", error);
    } else {
      console.log("File uploaded successfully:", data);
      obj.community_logo = data.path;
    }
  }
  function handleInput(e: any) {
    setInputvalue(e.target.value);
  }
  function handleInput2(e: any) {
    setDescription(e.target.value);
  }

  function onContinueClick() {
    CommunityLogoUpload(file)
    obj.community_name = InputValue;
    obj.community_description = description;
    obj.community_logo = community_logo;
    router.push("/CommunitySetUpIntegration");
  }

  function handleGlobeClick() {
    setWebsitePopUpVisibility(!WebsitePopUpVisibility);
  }

  function handleTwitterContinueClick() {
    setTwitterPopUpVisibility(false);
  }
  function handleWebsiteUrlContinueClick() {
    setWebsitePopUpVisibility(false);
  }
  function handleTwitterClick() {
    setTwitterPopUpVisibility(!TwitterPopUpVisibility);
  }

  const handleButtonClick = (buttonNumber: any) => {
    setSelectedButton(buttonNumber === selectedButton ? null : buttonNumber);
  };

  return (
    <>
      <Modal
        onClose={() => {
          setTwitterPopUpVisibility(!TwitterPopUpVisibility);
        }}
        open={TwitterPopUpVisibility}
        style={{}}
      >
        <div className="mt-[30vh] ml-[30vw]">
          <TwitterHandlePopUp
            onContinueClick={handleTwitterContinueClick}
            title="Twitter Handle"
            placeholder="Enter your twitter handle"
            handlePopUpInputValue={(e: any) => {
              setTwitterHandle(e.target.value);
            }}
          />
        </div>
      </Modal>
      <Modal
        onClose={() => {
          setWebsitePopUpVisibility(!WebsitePopUpVisibility);
        }}
        open={WebsitePopUpVisibility}
        style={{}}
      >
        <div className="mt-[30vh] ml-[30vw]">
          <TwitterHandlePopUp
            onContinueClick={handleWebsiteUrlContinueClick}
            title="Website Url"
            placeholder="Enter your Website Url"
            handlePopUpInputValue={(e: any) => {
              setWebsiteUrl(e.target.value);
            }}
          />
        </div>
      </Modal>
      <BackGroundPage />
      <div className="absolute  items-center m-[auto] top-[150px] justify-center right-0 left-0 w-[662px] h-[680px] bg-gray-800 shadow-md ">
        <div className="relative w-[662px] h-[40px] border-b-[1px] border-[#353B43]">
          <Link
            href="/"
            className="absolute top-[5px] left-[30px] text-[#AEABD8]"
          >
            COMMUNITY SETUP
          </Link>
          <div className="absolute top-[5px] left-[400px] text-[#FE702A]">
            STEP 1 OF 2
          </div>
          <div>
            <Temporary />
          </div>
        </div>
        <div className="">
          <p className="relative w-[236px] h-[32px] top-[0px] left-[30px] text-[#FFFFFF] font-sans font-normal font-bold:text-600 text-2xl leading-8">
            Basic Details
          </p>
          <p className="relative w-[500px] h-[22px] top-[7px] left-[30px] font-sans font-normal text-base leading-6 text-gray-500 ">
            Help your memebers know more about your community
          </p>

          <div>
            <ProfileIcon
              size={65}
              imageUrl="/ImageIcon.png"
              alt="nothing"
              classNameCircle=" relative w-[10px] top-[40px] left-[25px] border-dashed border-[0.7px] border-white"
              classNameImage=" relative left-[10px] top-[15px] w-[40.6px] h-[35.24px]"
              onProfileIconClick={handleProfileClick}
            />
          </div>
          <div>
            <TextInput
              placeholder="E.g. Fire Community"
              label="Name of your Community*"
              className="relative top-[-40px] left-[100px] w-[500px] h-[41px]"
              classNameInput="w-[500px] h-[41px] bg-[#2E363F] text-white"
              classNameLabel="font-medium text-white leading-6 text-white font-generalsans w-[250px] h-[22px] mb-2"
              handleChange2={handleInput}
              handleValue={InputValue}
            />
          </div>
          <TextArea
            placeholder="Add description to let the members know more about your community"
            label="Whats the goal of the Community?"
            className="relative top-[20px] left-[60px] w-[650px] h-[250px]"
            classNameInput="w-[550px] h-[250px] bg-[#2E363F] rounded-lg overflow-hidden font-small"
            classNameLabel="font-small text-base leading-6 text-white  w-[250px] h-[22px] mb-2"
            handleChange2={handleInput2}
            handleValue={description}
          />

          <p className="relative w-[236px] h-[32px] top-[-20px] left-[60px] font-medium text-base leading-6 text-white font-generalsans">
            Choose Type Of Community*
          </p>
          <div className="flex relative w-[500px] h-[100px] top-[-15px] left-[60px]">
            <button
              onClick={() => handleButtonClick(1)}
              type="button"
              className={`w-[65px] h-[32px] text-white px-1 py-1 mr-4 rounded-lg ${
                selectedButton === 1 ? "bg-black text-white" : "bg-[#2E363F]"
              }`}
            >
              DAO
            </button>
            <button
              onClick={() => handleButtonClick(2)}
              type="button"
              className={`w-[250px] h-[32px] text-white px-1 py-1 mr-4 rounded-lg ${
                selectedButton === 2 ? "bg-black text-white" : "bg-[#2E363F]"
              }`}
            >
              Content Creator
            </button>
            <button
              onClick={() => handleButtonClick(3)}
              type="button"
              className={`w-[250px] h-[32px] text-white px-1 py-1 mr-4 rounded-lg ${
                selectedButton === 3 ? "bg-black text-white" : "bg-[#2E363F]"
              }`}
            >
              NFT Community
            </button>
            <button
              onClick={() => handleButtonClick(4)}
              type="button"
              className={` w-[100px] h-[32px] text-white px-1 py-1 rounded-lg ${
                selectedButton === 4 ? "bg-black text-white" : "bg-[#2E363F]"
              }`}
            >
              Social
            </button>
          </div>
          <p className="relative w-[200px] h-[32px] top-[-50px] left-[60px] font-medium text-base leading-6 text-white font-generalsans">
            Add Links
          </p>

          {/* <a href="https://www.example.com"> */}
          <ProfileIcon
            size={30}
            imageUrl="/Globe.png"
            alt="nothing"
            classNameCircle="relative top-[-45px] left-[60px] border-[0.7px] mr-3"
            // classNameImage="relative left-[22px] top-[26px] w-[51.6px] h-[42.24px]"
            onProfileIconClick={handleGlobeClick}
          />
          {/* </a> */}

          {/* <a href="https://www.example.com"> */}
          <ProfileIcon
            size={30}
            imageUrl="/Twitter.png"
            alt="nothing"
            classNameCircle="relative top-[-45px] left-[60px] border-[0.7px] mr-4"
            onProfileIconClick={handleTwitterClick}
            // classNameImage="relative left-[22px] top-[26px] w-[51.6px] h-[42.24px]"
          />
          {/* </a> */}
          <IconButton
            icon={VscBlank}
            label="Back"
            className="relative bg-[#1D1D1D] top-[-25px] left-[0px] w-[340px] h-[60px]"
            classNameIcon=""
            onClick={() => router.push("/CommunitySetupScreen")}
          />
          <IconButton
            icon={VscBlank}
            label="Continue"
            className="relative bg-[#FE702A] top-[-85px] left-[335px] w-[338px] h-[60px]"
            classNameIcon=""
            onClick={onContinueClick}
          />
        </div>
      </div>
    </>
  );
};

export default Step1CommunitySetup;
