import React, { useEffect, useState } from "react";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import router from "next/router";
import { supabase } from "@/utils/supabaseClient";
import EditMission from "@/utils/EditMission";
import { useRouter } from "next/router";
import MissionFormData from "@/utils/MissionFormData";
import UserHeader from "@/components/molecules/UserHeader";
import UserSidebar from "@/components/molecules/UserSidebar";
declare var window: any;
// const [file, setFile] = useState("");
function MissionForUser(props: any) {
  // you cant extend props as it is a non extensible object (to be resolved)
  // to implement router vaali thing after khana khaakey.
  const [type, setType] = useState(5);
  const [fileName, setFileName] = useState("");
  const obj2 = EditMission();
  let obj = MissionFormData();
  const [missionUrl, setmissionUrl] = useState("");
  const router = useRouter();
  const [title, settitle] = useState("Mission title");
  const [copyLink, setcopyLink] = useState("Copy");
  const [description, setdescription] = useState(`here comes the description.`);
  const [tags, settags] = useState(["NoTags"]);
  const [missionSteps, setmissionSteps] = useState([
    "Heading 1",
    "Subheading 1",
    "Heading 2",
    "Subheading2",
  ]);
  const [reward, setreward] = useState(1000);
  const [coinType, setcoinType] = useState("USDC");
  let missionDetails: any;
  console.log(router.query.myData);
  if (router.query.myData !== undefined) {
    missionDetails = JSON.parse(router.query.myData as string);
  } else {
    missionDetails = {};
  }
  const [data, setData] = useState();
  useEffect(() => {
    setreward(missionDetails.amount);
    let newTags: any = [];

    if (missionDetails.tags != null && missionDetails.tags != undefined) {
      newTags = [];
      missionDetails.tags.map((val: any) => {
        newTags.push(val.title);
      });
    }

    setmissionUrl(
      `${
        typeof window == "undefined" ? "dontknow" : window.location.origin
      }/missions/${missionDetails.mission_id}`
    );
    settags(newTags);
    settitle(missionDetails.title);
    setdescription(missionDetails.description);
    setmissionSteps([
      missionDetails.heading1 || "NotAvailable",
      missionDetails.subheading1 || "NotAvailable",
      missionDetails.heading2 || "NotAvailable",
      missionDetails.subheading2 || "NotAvailable",
    ]);
  }, [router.query.myData]);

  // const coinType = "USDC";
  const [walletAddress, setWalletAddress] = useState("");
  var community_id = "";
  var user_wallet_id = "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("yahan aa raha");
      const storedJsonData = localStorage.getItem("data");
      const storedJsonwallet = localStorage.getItem("user_wallet_id");
      const storedJsonCommunity = localStorage.getItem("community_id");
      const jsonData = JSON.parse(storedJsonData ?? "{}");
      // console.log(storedJsonwallet,storedJsonCommunity)
      if (storedJsonCommunity !== null) {
        community_id = storedJsonCommunity;
      }
      if (storedJsonwallet !== null) {
        user_wallet_id = storedJsonwallet;
      }
      const arr = ["file", "link", "url", "invite", "text", "empty"];
      arr.forEach((item, index) => {
        if (item === missionDetails.submission_type) {
          console.log("dekho", missionDetails.submission_type);
          setType(index);
        }
      });
      console.log("mission detalis ka submission type", type);
    }
  }, []);

  async function fetchData(xp:any) {
    try {
      // Fetch the community data row using the user's wallet_id as a filter condition
      const { data: rowData, error } = await supabase
        .from("community_data")
        .select("*")
        .eq("id", community_id)
        .single();
      if (error) {
        console.error("error aa raha", error);
        return;
      }
      console.log("sahi chal raha sab", rowData);
      // setCommunityName(rowData.community_name);

      const members = rowData.Members.filter(
        (item: any) => item.user_wallet_id === user_wallet_id
      );

      console.log(members[0].xp);
      //update here in the supabase xp of member
      
    } catch (err) {
      console.error(err);
    }
  }

  async function HandleSubmit() {
    // Also need to store data to put in Admin's Review Section
    // if admin->routerpush-edit
    // else
    // await connectWallet();
    console.log("clicked");
    const xp = missionDetails.xp;
    await fetchData(missionDetails.xp);

    //community id leni hai local storage se

    //us community ke saare members pe jaana hai jo match kiya uska xp badhana hai

    router.push("/YourSpace");
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name) {
      setFileName(file.name);
    }
  };

  return (
    <div>
      <div className="min-h-screen min-w-fit bg-[#171C23] flex  scrollbar-hide">
        <UserSidebar />
        <div className="h-full w-full">
          <UserHeader />
          <div className="h-full w-full  flex justify-between">
            <div className="grid grid-cols-[1400px] gap-10  bg-[#171C23] grid-rows-[71px,auto] h-[1200px] w-[auto] ">
              <div className="flex align-middle border-b-[1px] border-b-[#353B43]">
                <Image
                  src="/Icons/FireBondIcon.png"
                  width={160}
                  height={10}
                  alt="alt"
                  className=""
                />
              </div>

              <div className="flex">
                <div className="text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43]  rounded-[20px]">
                  <Image
                    src="/MissionPageBanner.png"
                    width={800}
                    height={1}
                    alt="kjdfhah"
                    className="mx-[10px] my-[10px]"
                  />
                  <div className="font-semibold text-2xl text-white mx-3">
                    {title}
                  </div>

                  {type == 0 && (
                    <div className="mt-[36px]">
                      <h1 className="font-medium text-base text-white mb-[11px]">
                        Upload the file
                      </h1>
                      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] px-[25px] ">
                        <Image
                          src="Icons/upload.svg"
                          alt=""
                          height={20}
                          width={20}
                        />
                        <input
                          type="file"
                          className=" absolute w-full h-full outline-none bg-inherit opacity-0"
                          onChange={handleFileUpload}
                        />
                        <h1 className="text-xs text-[#D0D0D0A6] font-normal">
                          {fileName ? fileName : "Upload the submission"}
                        </h1>
                      </div>
                      <h1 className="text-xs text-[#A6A6A6] font-normal mt-[9px]">
                        File can be pdf, png, jpeg, doc.x
                      </h1>
                    </div>
                  )}
                  {type == 1 && (
                    <div className="mt-[36px]">
                      <h1 className="font-medium text-base text-white mb-[11px]">
                        Enter the Link
                      </h1>
                      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
                        <input
                          type="url"
                          className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
                          placeholder="Enter the Link"
                        />
                      </div>
                    </div>
                  )}
                  {type == 2 && (
                    <div className="mt-[36px]">
                      <h1 className="font-medium text-base text-white mb-[11px]">
                        Enter the URL
                      </h1>
                      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
                        <input
                          type="url"
                          className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
                          placeholder="Enter URL"
                        />
                      </div>
                    </div>
                  )}
                  {type == 3 && (
                    <div className="mt-[36px]">
                      <h1 className="font-medium text-base text-white mb-[11px]">
                        Number of invites
                      </h1>
                      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
                        <input
                          type="number"
                          className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
                          placeholder="number of invites"
                        />
                      </div>
                    </div>
                  )}
                  {type == 4 && (
                    <div className="mt-[36px]">
                      <h1 className="font-medium text-base text-white mb-[11px]">
                        Enter Text
                      </h1>
                      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
                        <input
                          type="text"
                          className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
                          placeholder="Enter text"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col text-[#ffffff] mx-[auto] ">
                  <BeAchamp title={title} tags={tags} val={reward} />
                  <button
                    onClick={HandleSubmit}
                    className="mt-[30px] text-center align-middle  font-[500] font-[General Sans] text-[14px]  w-[346px] h-[47px] rounded-[8px] border-white border-[1px]"
                  >
                    Submit Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionForUser;
