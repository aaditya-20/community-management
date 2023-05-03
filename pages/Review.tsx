import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";


const ApprovedMissions = [
    {},
  
];
const PendingMissions = [
    {},
];

const Review = () => {

  const ApprovedMissionsList = ApprovedMissions.map((value, index) => {
    return (
      <div key = {index} className="my-[10px]  mx-[10px]">
        {/* <LeaderboardCard rank={index+1} name={value.name} point = {value.point}/> */}
      </div>
    );
  });

  const PendingMissionsList = PendingMissions.map((value, index) => {
    return (
      <div key = {index} className="my-[10px]  mx-[10px]">
        {/* <LeaderboardCard rank={index+1} name={value.name} point = {value.point}/> */}
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
          <div className='text-[#FFFFFF] font-[600] text-[24px] my-[10px] mx-[20px]'>Reviews</div>
            <hr  className="border-[#353B43] border-[1px]"/>
            <div className=' grid grid-cols-[auto,auto]  grid-rows-[auto] gap-[70px] m-[50px]'>
                 <div className=" flex flex-col border-[1px] border-[#353B43] rounded-[20px]">
                     <div className="flex justify-center h-[auto]  w-[400px] text-[30px] text-[white] ">Pending </div>
                     <div className="flex justify-center  text-[30px] text-[white]  ">here comes all pending missions </div>
                     {/* <div className="flex justify-center  text-[30px] text-[white] border-[1px]">Pending </div>
                     <div className="flex justify-center  text-[30px] text-[white] border-[1px]">Pending </div> */}
                     
                 </div>
                 <div className=" flex flex-col border-[1px] border-[#353B43] rounded-[20px]">
                    <div className="flex justify-center h-[auto]  w-[400px] text-[30px] text-[white] ">Approved </div>
                    <div className="flex justify-center  text-[30px] text-[white] ">here comes all aprroved missions </div>
                 </div>
            </div>
           

        
        </div>
      </div>
  );
};

export default Review;
