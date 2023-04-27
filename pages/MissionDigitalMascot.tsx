import React from 'react'
import Sidebar from '@/components/molecules/Sidebar';
import Header from '@/components/atoms/Header';
import NavbarMissionOnboarding from '@/components/molecules/NavbarMissionOnboarding';
import BeAchamp from '@/components/molecules/BeAchamp';
import MissionStepsCard from '@/components/molecules/MissionStepCard';
import Image from 'next/image';
export default function MissionDigitalMascot() {
  return (
    <div>
        <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-[1500px] w-[1400px] md:grid-cols-[auto,1fr]">
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
                    <div className='font-[600] text-[24px] text-[#ffffff]'>Design our company digital mascot</div>
                    <div className='font-[500] text-[16px] text-[#D9D9D9]'>We want to Design our company digital mascot
                        <ol type="1" className='font-[General Sans] list-decimal mx-[20px]'>
                            <li>Requirements:</li>
                            <li>the body of the NFT design consists of a combination of our icon and as gemstones, gold, etc.</li>
                            <li>The design should include the project name: Mew Protocol</li>
                            <li> animation effects. Format can be GIF, WEBP, etc.</li>
                            <li>the NFT design should be consistent with the design style of our project</li>
                            <li>We will choose 3 prizes: $40 for the first place, $10 for the second and the third place.</li>
                            <li>Reference:</li>
                            <li>www.mewprotocol.com</li>
                        </ol>            
                    </div>  
                
                <Image src="/../public/Icons/DigitalMascot.png" width={255} height={255} alt='kjdfhah' className='mx-[auto] my-[30px] mb-[10px]'/>

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
