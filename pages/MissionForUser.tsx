import React, { useEffect, useState } from "react";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import router from "next/router";
import { supabase } from "@/utils/supabaseClient";
import EditMission from '@/utils/EditMission';
import { useRouter } from 'next/router';
import MissionFormData from '@/utils/MissionFormData';
declare var window: any;
// const [file, setFile] = useState("");
function MissionForUser(props: any) {
  // you cant extend props as it is a non extensible object (to be resolved)
  // to implement router vaali thing after khana khaakey. 
  const obj2 = EditMission();
  let obj = MissionFormData();
  const [missionUrl,setmissionUrl] = useState("");
  const router = useRouter();
  const [title,settitle] = useState("Mission title");
  const [copyLink,setcopyLink] = useState("Copy");
  const [description,setdescription] = useState(`here comes the description.`);
  const [tags,settags] = useState(["NoTags"]);
  const [missionSteps,setmissionSteps] =  useState( [
      "Heading 1",
      "Subheading 1",
      "Heading 2",
      "Subheading2",
  ]);
  const [reward,setreward] = useState(1000);
  const [coinType,setcoinType] = useState("USDC");
  let missionDetails:any;
  console.log(router.query.myData);
  if(router.query.myData !== undefined){

      missionDetails =  JSON.parse((router.query.myData as string))

  }
  else{
      missionDetails = {};
  }
  const [data, setData] = useState()
  useEffect(() => {
      setreward(missionDetails.amount)
      let newTags:any = [];
       
      if(missionDetails.tags!=null&&missionDetails.tags!=undefined){
              newTags = [];
               missionDetails.tags.map((val:any)=>{
              newTags.push(val.title);
          });
      }

      setmissionUrl(`${typeof window == "undefined"?"dontknow":window.location.origin}/missions/${missionDetails.mission_id}`);
      settags(newTags);
      settitle(missionDetails.title)
      setdescription(missionDetails.description)
      setmissionSteps([missionDetails.heading1||"NotAvailable",missionDetails.subheading1||"NotAvailable",missionDetails.heading2||"NotAvailable",missionDetails.subheading2||"NotAvailable"])
    }, [router.query.myData]);
    
  // const coinType = "USDC";
  const [walletAddress, setWalletAddress] = useState("");
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
        try {
          const { data, error } = await supabase
            .from("community_data")
            .select("*")
            .eq("wallet_id", accounts[0])
            .single();
          console.log(data);
          // console.log('commub inside->',community_id);
          // if (data != null && data.id === community_id) {
          //   await window.localStorage.setItem("data", JSON.stringify(data));
          //   router.push("/MissionViewPage");
          // }
          // else {
          //   console.log('helko');
          //   router.push("/UserLoginSignupPopup");
          // }
        
        } catch {
          console.log("Data not found - Error")
        }
      } catch {
        console.log("MetaMask Error")
      }
    }
   
    }
    async function HandleSubmit() {
      // Also need to store data to put in Admin's Review Section
      // if admin->routerpush-edit
      // else
      // await connectWallet();
    }
    
    return (
      <div>
        <div className="grid grid-cols-[1400px] gap-10  bg-[#171C23] grid-rows-[71px,auto] h-[1200px] w-[auto] ">
          <div className="flex align-middle border-b-[1px] border-b-[#353B43]">
            <Image
              src="/Icons/FireBondIcon.png"
              width={160}
              height={10}
              alt="alt"
              className=""
            />
            {/* <div className="absolute w-[124px] h-[39px] right-[0px] top-[20px]  bg-[#313131] rounded-[25px] flex items-center justify-center"> */}
            {/*Pending :: Change color of button when onWalletLink is called and user have connected his wallet */}
            {/* <button type="button" className="text-white font-small"  > */}
            {/* Link wallet */}
            {/* </button> */}
            {/* </div> */}
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
              <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
                <pre className="overflow-auto no-scrollbar">{description}</pre>
                <div className="my-[60px]">
                  <MissionStepsCard
                    heading1={missionSteps[0]}
                    descp1={missionSteps[1]}
                    heading2={missionSteps[2]}
                    descp2={missionSteps[3]}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-[#ffffff] mx-[auto] ">
              <BeAchamp title={title} tags={tags} val={reward} />
              <button
                onClick={HandleSubmit}
                className="mt-[30px] text-center align-middle  font-[500] font-[General Sans] text-[14px]  w-[346px] h-[47px] rounded-[8px] border-white border-[1px]"
              >
                submit work
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default MissionForUser;

