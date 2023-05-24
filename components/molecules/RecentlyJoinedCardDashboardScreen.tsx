import { FaDiscord } from "react-icons/fa";
import { PlatformIconWithBox } from "../atoms/PlatformIconWithBox";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

export default function RecentlyJoinedCardDashboardScreen() {
   useEffect(() => {
     fetchData();
   }, []);
   const [membersData, setmembersData] = useState([{}]);
   async function fetchData() {
     var wallet_id = "";
     if (typeof window !== "undefined") {
       const storedJsonData = localStorage.getItem("data");
       // console.log(storedJsonData)
       const jsonData = JSON.parse(storedJsonData ?? "{}");
       wallet_id = jsonData.wallet_id;
       console.log(jsonData);
     }
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
       setmembersData(rowData.Members);
       console.log(membersData);
     } catch (error) {
       console.error(error);
     }
   }

  return (
    <>
      <div className="h-[380px] w-[400px] bg-[#242B35] rounded-[20px] relative">
        <div>
          <div className="absolute text-[#FFFFFF] font-[General Sans] font-[600] text-[24px] left-[24px] top-[22px]">
            Recently joined
          </div>
          <div className="absolute text-[#D9D9D9] font-[General Sans] font-[400] text-[14px] left-[317px] top-[32px]">
            Show All
          </div>
          <div className="">
            {membersData.map((member: any) => (
              <div
                key={member.id}
                className="relative avatar top-[75px] left-[24px]"
              >
                <div className="w-[50px] h-[50px] rounded-full">
                  <img src="/Icons/Ellipse 14.png" alt="IMG" />
                </div>
                <div className="absolute left-[30px]">
                  <PlatformIconWithBox
                    Icon={FaDiscord}
                    IconSize={7}
                    IconColor="white"
                    BoxStyle="bg-[#6359E9] w-[14px] h-[14px] rounded-[4px]"
                  />
                </div>
                <div className="relative text-[#FFFFFF] text-[14px] font-[400] font-[General Sans] top-[10px]">
                  @{member.User_name}
                </div>
                <div className="relative text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[10px] left-[90px]">
                  joined on {new Date(member.date_of_join).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
