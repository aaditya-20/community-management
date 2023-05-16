import React, { useEffect, useState } from "react";
import Header from "../components/atoms/Header";
import Image from "next/image";
import MissionMainCard from "../components/molecules/MissionMainCard";
import ActivityCard from "@/components/molecules/ActivityCardNewDashboard";
import UserSidebar from "@/components/molecules/UserSidebar";
import Transactions from "@/components/molecules/Transactions";
import WelcomeCardNewDashboard from "@/components/molecules/WelcomeCardNewDashboard";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/router";
import { getDate } from "date-fns";




  
  
export default function YourSpace(){
  const router = useRouter();
  function createhandleclick() {
    router.push("/MissionCreationFormPage");
  }
  function handleCardClick(missionDetails:any){
    console.log("details->",missionDetails);
    router.push({
      pathname: '/MissionViewPage',
      query: {
        myData: JSON.stringify(missionDetails),
       }
    },)
  }

  var wallet_id = "";
  

  // to display number of days left
  function daysleft(dueDate: any) {
    let temp = getDate(new Date(dueDate.seleted_date)) - getDate(new Date());
    if (dueDate == "" || dueDate == null) {
      return "No Due Date";
    } else if (temp >= 0) {
      return `${temp} Days Left`;
    } else {
      return "Expired";
    }
  }
  const [missions, setmissions] = useState([{}]);
  if (typeof window !== "undefined") {
    const storedJsonData = localStorage.getItem("data");
    // console.log(storedJsonData)
    const jsonData = JSON.parse(storedJsonData ?? "{}");
    wallet_id = jsonData.wallet_id;
    console.log(jsonData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
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
      console.log(rowData.missions);
      // missions = rowData.missions;
      setmissions(rowData.missions);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="h-full bg-[#171C23] w-full">
      {/* Main Div */}
      <div className="h-full w-full flex">
        {/* Sidebar */}
        <UserSidebar />
        <div className="w-full h-full overflow-scroll scrollbar-hide">
          <Header />
          {/* Main Section & Right Side Section */}
          <div>
          <h1 className="text-white text-2xl font-bold m-2">Satoshi&apos; Space</h1>
          <h3 className="text-white text-l font-bold m-2">Here&apos;  what&apos; happening with your community</h3>
          </div>
          <div className="mb-5">
         <WelcomeCardNewDashboard/>
          <div className="flex flex-col justify-end items-center w-full">
          
        </div>
          </div>
          <div className="bg-[#232B35]  width-[1200px] height-[352px] left-[290px] top-[494px] m-5 p-5">
            <div className="flex">
         
            <div className="m-4 bg-[#232B35]">
            <Image src="/form 4-1.png" alt="hell" width={360} height={220} className=" bg-black width-[360.76px] height-[220px] left-[747px] top-[566px]"/ >
            </div>
            <div className=" m-5 p-5 text-white text-2xl font-bold m-2 width-[276px] height-[35px] left-[1163px] top-[556px]">Make a Referral Bonus</div>
          </div>
          </div>
          <div className="m-5 flex justify-between ">
            {/* Main Section */}
            <div className="flex justify-center scrollbar-hide p-6 ">
              <div className="m-5 p-5">
                <div className="flex">
                <div className="">
                <Transactions />
                </div>
                <div className=" width-[841px] height-[325px] left-[649px] top-[870px]"><ActivityCard/></div>
                </div>
                <div className=" w-[1200px] h-[539px] left-[290px] top-[1219px]">
                <div className="flex m-100 p-10">
                <h1 className=" left-[322 px] text-white text-2xl font-bold ">Available Missions</h1>
                {/* <h1 className=" left-[1275 px] text-white text-2xl font-bold " >View All </h1> */}
                </div>
                <div className=" grid grid-cols-3 gap-3">
                {missions &&
                    missions.map((item: any, index) => {
                      return (
                        <div className="m-[8px] " key={index} onClick={()=>{handleCardClick(item)}}>
                          <MissionMainCard
                            profileUrl1={"/Avatar.png"}
                            profileUrl2={"/Avatar.png"}
                            profileUrl3={"/Avatar.png"}
                            profileUrl4={"/Avatar.png"}
                            submission={item.submission}
                            daysLeft={daysleft(item)}
                            usdc={item.amount}
                            title={item.title}
                            tags={item.tags}
                          />
                        </div>
                      );
                    })}
                </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
  );
};


