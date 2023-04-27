import { FaDiscord } from "react-icons/fa"
import { PlatformIconWithBox } from "../atoms/PlatformIconWithBox"

export default function RecentlyJoinedCardDashboardScreen() {
  return (
    <>
       <div className='h-[280px] w-[400px] bg-[#242B35] rounded-[20px] '>
       <div>
        <div className="absolute text-[#FFFFFF] font-[General Sans] font-[600] text-[24px] left-[24px] top-[22px]  ">Recently joined</div>
        <div className="absolute text-[#D9D9D9] font-[General Sans] font-[400] text-[14px] left-[317px] top-[32px]  ">Show All</div>

{/*  repeatitive divs portion */}
        <div className="">
          {/*avatar st  */}
          <div className="relative avatar top-[75px] left-[24px]">
                <div className=" w-[50px] h-[50px]  rounded-full">
                  <img src="/Icons/Ellipse 14.png" alt="IMG"/>
                </div>
                <div className="absolute left-[30px]">
                  <PlatformIconWithBox Icon ={FaDiscord} IconSize={7} IconColor="white" BoxStyle="bg-[#6359E9] w-[14px] h-[14px] rounded-[4px]"/>
              </div>
              <div className="relative text-[#FFFFFF] text-[14px] font-[400] font-[General Sans] top-[10px]">
                  @Krishna11
              </div>
              <div className="relative text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[10px] left-[109px]">
                   joined on 10th march
              </div>
        </div>
            
       {/*avatar end  */}

       <div className="relative avatar top-[30px] left-[24px]">
                <div className=" w-[50px] h-[50px]  rounded-full">
                  <img src="/Icons/Ellipse 14.png" alt="IMG"/>
                </div>
                <div className="absolute left-[30px]">
                  <PlatformIconWithBox Icon ={FaDiscord} IconSize={7} IconColor="white" BoxStyle="bg-[#6359E9] w-[14px] h-[14px] rounded-[4px]"/>
              </div>
              <div className="relative text-[#FFFFFF] text-[14px] font-[400] font-[General Sans] top-[10px]">
                  @Krishna11
              </div>
              <div className="relative text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[10px] left-[109px]">
                   joined on 10th march
              </div>
        </div>

        {/* alkfshs */}
        <div className="absolute avatar top-[210px] left-[24px]">
                <div className=" w-[50px] h-[50px]  rounded-full">
                  <img src="/Icons/Ellipse 14.png" alt="IMG"/>
                </div>
                <div className="absolute left-[30px]">
                  <PlatformIconWithBox Icon ={FaDiscord} IconSize={7} IconColor="white" BoxStyle="bg-[#6359E9] w-[14px] h-[14px] rounded-[4px]"/>
              </div>
              <div className="relative text-[#FFFFFF] text-[14px] font-[400] font-[General Sans] top-[10px]">
                  @Krishna11
              </div>
              <div className="relative text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[10px] left-[109px]">
                   joined on 10th march
              </div>
        </div>
        {/*  */}
        {/* <div className="absolute avatar top-[280px] left-[24px]">
                <div className=" w-[50px] h-[50px]  rounded-full">
                  <img src="/Icons/Ellipse 14.png" alt="IMG"/>
                </div>
                <div className="absolute left-[30px]">
                  <PlatformIconWithBox Icon ={FaDiscord} IconSize={7} IconColor="white" BoxStyle="bg-[#6359E9] w-[14px] h-[14px] rounded-[4px]"/>
              </div>
              <div className="relative text-[#FFFFFF] text-[14px] font-[400] font-[General Sans] top-[10px]">
                  @Krishna11
              </div>
              <div className="relative text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[10px] left-[109px]">
                   joined on 10th march
              </div>
        </div> */}

        

        </div>


       </div>
       </div>
    </>
  )
}
