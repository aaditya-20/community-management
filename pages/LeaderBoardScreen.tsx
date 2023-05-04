import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import LeaderboardCard from "@/components/molecules/LeaderboardCard";
import TopContributorCardLeaderboardScreen from "@/components/molecules/TopContributorCardLeaderboardScreen";
import { BsChevronDown } from "react-icons/bs";
import { supabase } from "@/utils/supabaseClient";
import { useEffect } from "react";
import { useState } from "react";



const Leaderboard = () => {

  const [cards,setCards] = useState([{}]);
  const [leaderboardData,setleaderboardData] = useState([{}]);
  // const [PendingMissions,setPendingMissions] = useState([{}]);

  useEffect(()=>{
    async function leaderBoardDataFetch(){
      const { data, error } =  await supabase.from('leaderboard').select('*')
      console.log("dat->",data);
      if(data){
      //  PendingMissions = data;
      data.sort((a, b) => {
        return b.xp - a.xp;
      });
      let temp_arr = [];
      for(let i=0;i<5;i++){
        temp_arr.push(data[i]);
      }
       setCards(temp_arr);
       setleaderboardData(data);
      }
      else{
        console.log("pending data is not available");
      }
    }
  
    leaderBoardDataFetch();
  },[])
  console.log("ldda->",leaderboardData);
  const ele = cards.map((value:any, index:any) => { 
    return (
      <div key = {index} className="my-[10px] inline-block mx-[10px]">
        <LeaderboardCard rank={index+1} name={value.Name} point = {value.xp}/>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-[auto,auto]   bg-[#171C23] grid-rows-[71px,auto] h-[1000px] w-[1450px]    md:grid-cols-[auto,1fr]">
       <div className='row-span-3 border-r-[1px] border-r-[#353B43]'>
            <Sidebar/>
        </div>
        <div className='border-b-[1px] border-b-[#353B43]'>
            <Header/>
        </div>
      <div className="flex flex-col">
          <div className='text-[#FFFFFF] font-[600] text-[24px] my-[10px] mx-[20px]'>LeaderBoard</div>

            <div className='flex mx-[20px] mb-[30px] w-[auto] bg-[#171C23] '>
              <p className='text-[#A6A6A6] font-[400] text-[16px]'>check who is ahead of evryone</p>
              <button className='absolute right-[20px] flex items-center justify-evenly mb-[10px] border-[1px] border-[#757575]  text-[#757575] rounded-[8px] w-[109px] h-[33px]'>Last Week <BsChevronDown color='#757575' size={15} className=''/></button>

            </div>
            <div>
                {ele} 
            </div>  

            <div className="mx-[10px]">
              <TopContributorCardLeaderboardScreen data={leaderboardData}/>
            </div>


        
        </div>
      </div>
  );
};

export default Leaderboard;
