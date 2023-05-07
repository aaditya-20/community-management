import React from 'react'
import Sidebar from '@/components/molecules/Sidebar';
import Header from '@/components/atoms/Header';
import NavbarMissionOnboarding from '@/components/molecules/NavbarMissionOnboarding';
import BeAchamp from '@/components/molecules/BeAchamp';
import MissionStepsCard from '@/components/molecules/MissionStepCard';
import Image from 'next/image';
import Link from 'next/link';
export default function MissionAMAQuestion() {
  return (
    <div>
        <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-[1100px] w-[1400px] md:grid-cols-[auto,1fr]">
        <div className="row-span-3 border-r-[1px] border-r-[#353B43]">
            <Sidebar />
        </div>
        <div className="border-b-[1px] border-b-[#353B43]">
            <Header />
        </div>
        <div className=''>
          <NavbarMissionOnboarding />
        </div>
        <div className='flex'>
            <div className='text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]'>

                <Image src="/../public/Icons/MissionPageBanner.png" width={800} height={1} alt='kjdfhah' className='mx-[10px] my-[10px]'/>
                <div className='mx-[30px] my-[30px]'>
                    <div className='font-[600] text-[24px] text-[#ffffff] my-[20px]'>Submit An AMA Question</div>
                    <div className='font-[500] text-[16px] text-[#D9D9D9]'>To complete this mission, please complete the survey form in the link:
                    <Link href='https://www.notion.so/firebond/Popular-quests-04e7fe68c68a4c94bf878aaddb5fd1ff?pvs=4' className='block mb-[20px] text-[#FE702A]'>https://www.notion.so/firebond/Popular-quests-04e7fe68c68a4c94bf878aaddb5fd1ff?pvs=4</Link>
                     Then input the secret code provided at the end of the form.

                    </div>  
                </div>
                <div className='mx-[30px] my-[30px]'>
                <MissionStepsCard className="mx-[20px]" heading1="Onboard 10 new members.................................................................                      " heading2="Submit mission" descp1="Invite new members..........................................................." descp2="Share the proof of work" />  
                </div>

                </div>
            <div className='text-[#ffffff] w-[auto] h-[auto] ml-[20px]'><BeAchamp val="1000"/></div>
        </div>



    </div>
    </div>
  )
}