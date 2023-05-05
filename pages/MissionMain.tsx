import React, { useEffect } from "react";
import Sidebar from "../components/molecules/Sidebar";
import Header from "../components/atoms/Header";
import Image from "next/image";
import { AiOutlinePlusCircle } from "react-icons/ai";
import MissionMainCard from "../components/molecules/MissionMainCard";
import AddMoreCard from "../components/molecules/AddMoreCard";
import { useRouter } from "next/router";
import MissionTemplateEdit from "./MissionTemplateEdit";
import { supabase } from "@/utils/supabaseClient";
import { useState } from "react";
const twitter = [
  {
    id: 1,
    title: "Follow on Twitter",
    button: 0.1,
    mission: "Follow us on Twitter",
  },
  {
    id: 2,
    title: "Write a tweet about Firebond",
    button: 2.9,
    mission: "Write a thoughtful message about firebond on why we rock!...",
  },
];

const Discord = [
  {
    id: 1,
    title: "Make Friends",
    button: 2.9,
    mission: "Join discord channel and got ver...",
  },
];

const Community = [
  {
    id: 1,
    title: "Be A Champion",
    button: 2.9,
    mission: "Follow firebond twitter and get ...",
    route:'/MissionOnboardingMisison',
  },
  {
    id: 2,
    title: "Feedback",
    button: 2.9,
    mission: "Give your feedback regarding the ...",
    route:'/MissionShareYourFeedback',
  },
];

const MissionMain = () => {
  const router = useRouter();
  function createhandleclick() {
    router.push("/MissionCreationFormPage");
  }

  var wallet_id = "";
  // var missions = [{
  //   title : ''
  // }];
  const [missions,setmissions] = useState([{}]);
  if (typeof window !== "undefined") {
    const storedJsonData = localStorage.getItem("data");
    // console.log(storedJsonData)
    const jsonData = JSON.parse(storedJsonData ?? "{}");
    wallet_id = jsonData.wallet_id;
    console.log(jsonData);
  }

  
  useEffect(()=>{
    fetchData();
  },[])
  async function fetchData(){

  try {
    // Fetch the community data row using the user's wallet_id as a filter condition
    const { data: rowData, error } = await supabase
      .from("community_data")
      .select("*")
      .eq("wallet_id", wallet_id)
      .single();
    if (error) {
      console.error(error);
      return;
    }
    console.log(rowData);
    // missions = rowData.missions;
    setmissions( rowData.missions)

  } catch (error) {
    console.error(error);
  }
}
console.log("->missions->  jad->",missions);

  return (
    <div className="h-screen bg-[#171c23]">
      {/* Main Div */}
      <div className="h-full w-full  flex">
        {/* Sidebar */}
        <Sidebar />
        <div className="w-full h-full overflow-scroll scrollbar-hide">
          <Header />
          <div className="h-[172px] w-full p-6 border-t-[1px] border-b-[1px] border-[#353B43]">
            <div className=" h-full w-full">
              <h1 className="font-semibold text-2xl text-white">Missions</h1>
              <p className="font-normal text-[16px] leading-[22px] text-[#A6A6A6]">
                Boost your community with missions
              </p>
              <div className="flex justify-between mt-6">
                <div className="flex gap-3 items-center justify-center">
                  <button className="h-[33px] w-[90px] bg-white/[0.05] rounded-[8px] flex justify-center items-center">
                    <div className="flex gap-[8.28px] justify-center items-center">
                      <h1 className="font-normal text-xs">Twitter</h1>
                      <Image
                        src="Icons/arrowDown.svg"
                        height={3.72}
                        width={7.45}
                        alt=""
                      />
                    </div>
                  </button>
                  <h1 className="font-[500px] text-xs text-[#EAEBEB]">
                    with skills
                  </h1>
                  <button className="h-[33px] w-[116px] px-3 py-2 bg-[#23272e] rounded-[8px] flex items-center justify-between">
                    <div className="h-[19.71px] w-[68.41px] bg-[#363C44] rounded-[4px] flex justify-center items-center gap-[2.39px]">
                      <Image src="Icons/✍️.svg" alt="" height={12} width={12} />
                      <h1 className="font-normal text-[11.5px] leading-4 text-white ">
                        Writing
                      </h1>
                    </div>
                    <AiOutlinePlusCircle className="text-[#7C7C7C]" size={16} />
                  </button>
                </div>
                <div className="flex gap-3 justify-center items-center">
                  <div className="w-[52.5px] h-[21px] flex overflow-hidden relative ">
                    <div className="h-[21px] w-[21px] rounded-full overflow-hidden  absolute left-0">
                      <Image
                        src="Icons/Ellipse_26.svg"
                        alt=""
                        height={21}
                        width={21}
                        className="object-cover"
                      />
                    </div>
                    <div className="h-[21px] w-[21px] rounded-full overflow-hidden absolute right-[21px]">
                      <Image
                        src="Icons/Ellipse_27.svg"
                        alt=""
                        height={21}
                        width={21}
                        className="object-cover"
                      />
                    </div>
                    <div className="h-[21px] w-[21px] rounded-full overflow-hidden absolute left-[21px]">
                      <Image
                        src="Icons/Ellipse_28.svg"
                        alt=""
                        height={21}
                        width={21}
                        className="object-cover"
                      />
                    </div>
                    <div className="h-[21px] w-[21px] rounded-full overflow-hidden absolute right-0 ">
                      <Image
                        src="Icons/Ellipse_29.svg"
                        alt=""
                        height={21}
                        width={21}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <button className="w-[98px] h-[33px]  border-[1px] border-[#757575] rounded-[8px] flex justify-center items-center gap-[9.13px]">
                    <Image
                      src="Icons/Add_user.svg"
                      alt=""
                      height={14.17}
                      width={12.75}
                    />
                    <h1 className="font-[500px] text-sm text-[#757575]">
                      Invite
                    </h1>
                  </button>
                  <button
                    onClick={createhandleclick}
                    className="w-[98px] h-[33px]  border-[1px] border-[#757575] rounded-[8px] flex justify-center items-center gap-[9.13px]"
                  >
                    <AiOutlinePlusCircle className="text-[#7C7C7C]" size={16} />
                    <h1 className="font-[500px] text-sm text-[#757575]">
                      Create
                    </h1>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Section & Right Side Section */}
          <div className="flex justify-between h-full w-full  ">
            {/* Main Section */}
            <div className="w-full h-full flex justify-center overflow-auto scrollbar-hide p-6 ">
              <div className="h-auto w-auto">
                <div className="w-full h-full flex flex-wrap justify-center">
                  {missions &&
                    missions.map((item:any, index) => {
                      return (
                      <div className="m-[3px]">
                         <MissionMainCard
                          key={index}
                          profileUrl1={"/Avatar.png"}
                          profileUrl2={"/Avatar.png"}
                          profileUrl3={"/Avatar.png"}
                          profileUrl4={"/Avatar.png"}
                          submission={0}
                          daysLeft={0}
                          usdc={0}
                          title={item.tilte}
                        />
                      </div>
                       
                      );
                    })}
                
                  <AddMoreCard />
                  
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className=" h-full border-l-[1px] border-[#474C52] p-6 ">
              <div className="h-full w-full overflow-auto scrollbar-hide">
                <div className="h-[105px] w-full flex justify-between items-start mb-4">
                  <div className="flex-row gap-2">
                    <h1 className="font-semibold text-2xl text-white">
                      Templates
                    </h1>
                    <h3 className="font-normal text-[16px] leading-[22px] text-[#A6A6A6]">
                      Used prebuilt template
                    </h3>
                  </div>
                  <button
                    onClick={() => router.push("/MissionTemplatePage")}
                    className="font-medium text-sm text-[#D8D8D8]"
                  >
                    Show more
                  </button>
                </div>

                {/* Twitter Section */}
                <h1 className="text-[#03A9F4] font-medium text-base mb-6">
                  #Twitter
                </h1>
                {twitter.map((item) => {
                  return (
                    <div onClick={() => router.push("/MissionTwitter")}
                      key={item.id}
                      className="w-full rounded-[10px] p-[19px] border-[1px] bg-[#232B35] border-[rgb(117,117,117)]/[0.04] mb-5 flex justify-between items-center"
                    >
                      <div>
                        <h1 className="font-semibold text-base text-white">
                          {item.title}
                        </h1>
                        <h2 className="font-normal text-xs text-[#A6A6A6] w-[237px] overflow-hidden text-ellipsis">
                          Mision: {item.mission}
                        </h2>
                      </div>
                      <button className="w-[70px] h-[30px] bg-[rgb(255,186,3)]/[0.36] rounded-[8px]">
                        <h1 className="font-bold text-[12px] leading-[14px] text-[#FFBA03]">
                          {item.button} USDC
                        </h1>
                      </button>
                    </div>
                  );
                })}

                {/* Discord Section */}
                <h1 className="text-[#6665D2] font-medium text-base mt-[34px] mb-6">
                  #Discord
                </h1>
                {Discord.map((item) => {
                  return (
                    <div onClick={() => router.push("/MissionTwitter")}
                      key={item.id}
                      className="w-full rounded-[10px] p-[19px] border-[1px] bg-[#232B35] border-[rgb(117,117,117)]/[0.04] mb-5 flex justify-between items-center"
                    >
                      <div>
                        <h1 className="font-semibold text-base text-white">
                          {item.title}
                        </h1>
                        <h2 className="font-normal text-xs text-[#A6A6A6] w-[237px] overflow-hidden text-ellipsis">
                          Mision: {item.mission}
                        </h2>
                      </div>
                      <button className="w-[70px] h-[30px] bg-[rgb(255,186,3)]/[0.36] rounded-[8px]">
                        <h1 className="font-bold text-[12px] leading-[14px] text-[#FFBA03]">
                          {item.button} USDC
                        </h1>
                      </button>
                    </div>
                  );
                })}

                {/* Community Section */}
                <h1 className="text-[#FE702A] font-medium text-base mt-[34px] mb-6">
                  #Community
                </h1>
                {Community.map((item) => {
                  return (
                    <div onClick={()=>{router.push(item.route)}}
                      key={item.id}
                      className="w-full rounded-[10px] p-[19px] border-[1px] bg-[#232B35] border-[rgb(117,117,117)]/[0.04] mb-5 flex justify-between items-center"
                    >
                      <div>
                        <h1 className="font-semibold text-base text-white">
                          {item.title}
                        </h1>
                        <h2 className="font-normal text-xs text-[#A6A6A6] w-[237px] overflow-hidden text-ellipsis">
                          Mision: {item.mission}
                        </h2>
                      </div>
                      <button className="w-[70px] h-[30px] bg-[rgb(255,186,3)]/[0.36] rounded-[8px]">
                        <h1 className="font-bold text-[12px] leading-[14px] text-[#FFBA03]">
                          {item.button} USDC
                        </h1>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionMain;
