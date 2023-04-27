import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import LeaderboardCard from "@/components/molecules/LeaderboardCard";
import TopContributorCardLeaderboardScreen from "@/components/molecules/TopContributorCardLeaderboardScreen";


const cards = [
  {
   name:"AMAN JAISWAL" ,
   point: 1000 ,
   rank: '1st'
  },
  {
    name:"NAMAN JAISWAL" ,
   point: 900 ,
   rank: '2nd'
  },
  {
    name:"MANAN JAISWAL" ,
   point: 600 ,
   rank: '3rd'
  },
  {
    name:"MAN JAISWAL" ,
   point: 450 ,
   rank: '4th'
  },
  {
    name:"ANNA JAISWAL" ,
   point: 200 ,
   rank: '5th'
  }
];

const Leaderboard = () => {
  return (
    <div className=" bg-gray-900 h-[870px]">
      <Header />
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="flex-0 flex">
          <div className="bg-gray-900 py-6 px-2">
            <h2 className="text-white text-2xl font-bold absolute left-[285px] top-[80px] mb-2">
              Leaderboard
            </h2>
            <div className="text-gray-400 text-medium absolute left-[285px] top-[110px]">
              Check who is ahead of everyone
            </div>
          </div>
          <div className=" bg-gray-900 py-0 px-0 flex flex-col flex-0">
            <div className=" flex flex-1 ">
              <div className="bg-gray-900  rounded-lg p-6 flex flex-col space-y-4">
              <div className="flex flex-row m-4 justify-between overflow py-[17px] px-[px]">
      <div className="m-20 px-[10px] p-2"> <LeaderboardCard name="AMAN JAISWAL" point='1000' rank='1st'/></div>
      <div className="m-20 px-[10px] p-2"> <LeaderboardCard name="AJAY" point='900' rank='2nd'/></div>
      <div className="m-20 px-[10px] p-2 "> <LeaderboardCard name="NAYAK" point='500' rank='3rd'/></div>
      <div className="m-20 px-[10px] p-2 "> <LeaderboardCard name="NAMAN" point='300' rank='4th'/></div>
      <div className="m-20 px-[10px] p-2 "> <LeaderboardCard name="HARRY" point='100' rank='5th'/></div>
    </div>
        </div>
                <div className="absolute left-[-95px] top-[40px]">
                  <div className = "absolute left-[390px] top-[480px] ">
                    <TopContributorCardLeaderboardScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="absolute left-[1210px] top-[80px] text-white text-xl font-bold">
          Button with drop down
        </h1>
      </div>
  );
};

export default Leaderboard;
