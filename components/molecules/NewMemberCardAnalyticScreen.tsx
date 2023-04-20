import { FaDiscord } from "react-icons/fa"
import { PlatformIconWithBox } from "../atoms/PlatformIconWithBox"

export default function NewMemberCardAnalyticScreen() {
  return (
    <>
       <div className='h-[350px] w-[668px] bg-[#242B35] rounded-[20px] '>
       <div>
        <div className="absolute text-[#FFFFFF] font-[General Sans] font-[500] text-[24px] left-[24px] top-[22px]  ">750+ new members</div>
        <div className="absolute text-[#D9D9D9] font-[General Sans] font-[400] text-[14px] left-[592px] top-[32px]  ">Show All</div>

        <div>
            <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[24px]">
                  profile id
            </div>
            <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[220px]">
                    joined date
            </div>
            <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[400px]">
                 completed missions
            </div>
            <div className="absolute text-[#A6A6A6] text-[12px] font-[400] font-[General Sans] top-[85px] left-[597px]">
                    platform
            </div>    
        </div>

{/*  repeatitive divs portion */}
       
          {/*avatar st  */}
       <div className="absolute top-[130px] left-[24px] ">
          <div className="avatar absolute">
                <div className="w-[38px] h-[38px]  rounded-full">
                      <img src="/Icons/Ellipse 14.png" alt="IMG"/>
                </div>
          </div>
        
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[40px]">
                @Krishna11
        </div>
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[190px] w-[110px]">
                20 feb 2023
        </div>
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[375px] w-[110px]">
                3
        </div>
        <div className="absolute left-[575px] top-[-5px]">
                  <PlatformIconWithBox Icon ={FaDiscord} IconSize={15} IconColor="white" BoxStyle="bg-[#6359E9] w-[37px] h-[37px] rounded-[10px]"/>
        </div>
              
        

        </div>
        {/*  */}
        <div className="absolute top-[190px] left-[24px] ">
          <div className="avatar absolute">
                <div className="w-[38px] h-[38px]  rounded-full">
                      <img src="/Icons/Ellipse 14.png" alt="IMG"/>
                </div>
          </div>
        
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[40px]">
                @Krishna11
        </div>
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[190px] w-[110px]">
                20 feb 2023
        </div>
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[375px] w-[110px]">
                3
        </div>
        <div className="absolute left-[575px] top-[-5px]">
                  <PlatformIconWithBox Icon ={FaDiscord} IconSize={15} IconColor="white" BoxStyle="bg-[#6359E9] w-[37px] h-[37px] rounded-[10px]"/>
        </div>
              
        </div>
        {/*  */}
       
        <div className="absolute top-[250px] left-[24px] ">
          <div className="avatar absolute">
                <div className="w-[38px] h-[38px]  rounded-full">
                      <img src="/Icons/Ellipse 14.png" alt="IMG"/>
                </div>
          </div>
        
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[40px]">
                @Krishna11
        </div>
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[190px] w-[110px]">
                20 feb 2023
        </div>
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[375px] w-[110px]">
                3
        </div>
        <div className="absolute left-[575px] top-[-5px]">
                  <PlatformIconWithBox Icon ={FaDiscord} IconSize={15} IconColor="white" BoxStyle="bg-[#6359E9] w-[37px] h-[37px] rounded-[10px]"/>
        </div>
              
        </div>   

        
        {/*  */}
        <div className="absolute top-[310px] left-[24px] ">
          <div className="avatar absolute">
                <div className="w-[38px] h-[38px]  rounded-full">
                      <img src="/Icons/Ellipse 14.png" alt="IMG"/>
                </div>
          </div>
        
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[40px]">
                @Krishna11
        </div>
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[190px] w-[110px]">
                20 feb 2023
        </div>
        <div className="absolute text-[#FFFFFF] text-[16px] font-[400] font-[General Sans] left-[375px] w-[110px]">
                3
        </div>

        <div className="absolute left-[575px] top-[-5px]">
                  <PlatformIconWithBox Icon ={FaDiscord} IconSize={15} IconColor="white" BoxStyle="bg-[#6359E9] w-[37px] h-[37px] rounded-[10px]"/>
        </div>
              
        

        </div>


       </div>
       </div>
    </>
  )
}
