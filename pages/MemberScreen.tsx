import React from 'react'
import Sidebar from '../components/molecules/Sidebar'
import Header from '../components/atoms/Header'
import MemberListCardMissionPage from '../components/molecules/MemberListCardMissionPage'
import { BsChevronDown } from "react-icons/bs";
export default function MemberScreen() {
  return (
    <>
      <div className='grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,auto] h-[1000px] w-[1450px]    md:grid-cols-[auto,1fr]'>
        {/* sidebar */}
        <div className='row-span-3 border-r-[1px] border-r-[#353B43]'>
            <Sidebar/>
        </div>
        {/* ----- */}

        {/* header */}
        <div className='border-b-[1px] border-b-[#353B43]'>
            <Header/>
        </div>
        {/* --header-- */}

        <div className='ml-[10px] h-[auto] w-[auto] bg-[#171C23]'>
            <div className='text-[#FFFFFF] font-[600] text-[24px] my-[10px] mx-[20px]'>Community members</div>

            <div className='flex mx-[20px] mb-[30px] w-[auto] bg-[#171C23] '>
              <p className='text-[#A6A6A6] font-[400] text-[16px]'>check who is ahead of evryone</p>
              <button className='absolute right-[20px] flex items-center justify-evenly mb-[10px] border-[1px] border-[#757575]  text-[#757575] rounded-[8px] w-[109px] h-[33px]'>Last Week <BsChevronDown color='#757575' size={15} className=''/></button>
             

            </div>
            <div className='mx-[20px]'>
               <MemberListCardMissionPage/>   
              </div>       
           
            
        </div>



      </div>
    </>
  )
}
