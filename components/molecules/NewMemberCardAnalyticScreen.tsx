import { FaDiscord } from "react-icons/fa";
import { PlatformIconWithBox } from "../atoms/PlatformIconWithBox";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

export default function NewMemberCardAnalyticScreen() {
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
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="h-[350px] w-[668px] bg-[#242B35] rounded-[20px] relative">
        <div>
          <div className="absolute text-[#FFFFFF] font-[General Sans] font-[500] text-[24px] left-[24px] top-[22px]">
            New members
          </div>
          <div>
            <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[30px]">
              profile id
            </div>
            <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[290px]">
              joined date
            </div>
            <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[500px]">
              completed missions
            </div>
          </div>
        </div>

        <div className="absolute top-[100px]">
          {membersData.map((member: any) => (
            <div
              key={member.id}
              className={`flex px-6 justify-between h-[83px] hover:bg-[#D9D9D90F] items-center cursor-pointer`}
            >
              <div className="avatar absolute">
                <div className="w-[38px] h-[38px] rounded-full">
                  <img src="/Icons/Ellipse 14.png" alt="Avatar" />
                </div>
              </div>
              <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[65px]">
                @{member.User_name}
              </div>
              <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[280px] w-[110px]">
                {new Date(member.date_of_join).toLocaleDateString()}
              </div>
              <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[520px] w-[110px]">
                {Array.isArray(member.missions_completed)
                  ? member.missions_completed.length
                  : 0}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
