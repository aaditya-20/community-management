import React from 'react'
import Sidebar from '@/components/molecules/Sidebar';
import Header from '@/components/atoms/Header';
import NavbarMissionOnboarding from '@/components/molecules/NavbarMissionOnboarding';
import BeAchamp from '@/components/molecules/BeAchamp';
import MissionStepsCard from '@/components/molecules/MissionStepCard';
import Image from 'next/image';
import RouteGuardAdmin from '@/utils/RouteGuardAdmin';
function MissionForUser() {
  return (
    <div>
        <div className="grid grid-cols-[1400px] gap-0  bg-[#171C23] grid-rows-[71px,auto] h-[1200px] w-[1400px] ">
        
        <div className="flex align-middle border-b-[1px] border-b-[#353B43]">
          <Image src="/../public/Icons/FireBondIcon.png" width={160} height={10} alt='kjdfhah' className=''/>
          <div className="absolute w-[124px] h-[39px] right-[0px] top-[20px]  bg-[#313131] rounded-[25px] flex items-center justify-center">
        {/*Pending :: Change color of button when onWalletLink is called and user have connected his wallet */ }
            <button type="button" className="text-white font-small"  >
                Link wallet
            </button>
        </div>
        </div>
       
        <div className='flex'>
            <div className='text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]'>
                
            <Image src="/../public/Icons/MissionPageBanner.png" width={960} height={1} alt='kjdfhah' className='mx-[10px] my-[10px]'/>
              
                <div className='mx-[30px] my-[30px] max-w-[960px]'>
                    <div className='font-[600] text-[24px] text-[#ffffff]'>Onboard 10 new community members</div>
                    <div className='font-[500] text-[16px] text-[#D9D9D9] my-[10px]'>This bounty is for onboarding 10 new people into Firebond Discord community. You’d do that by generating a new invite link (we’re not counting past invitations) from our Discord and sharing it with people who are genuinely mission aligned.
                        <ol type="1" className='font-[General Sans] list-decimal mx-[20px] my-[50px]'>
                            <li>No prize if it looks like you’re just gaming the system by inviting random people who don’t care about Próspera’s mission. So be thoughtful about who you invite.</li>
                            
                            <li> When they arrive they should introduce themselves so we understand their story. This also helps us know they’re not just friends helpin</li>

                            <li>When you reach 10 people, submit your claim and we’ll review.</li>

                            
                        </ol>
                       <div className='my-[20px]'>
                       For those who recruit the right people and help us build out our community with high quality participants, this mission can extend beyond 20.
                        </div>             
                    </div>  
                

                </div>
                <div className='mx-[30px] my-[40px]'>
                   <MissionStepsCard className="mx-[20px]" heading1="Onboard 10 new members.................................................................                      " heading2="Submit mission" descp1="Invite new members..........................................................." descp2="Share the proof of work" />  
                  
                </div>
               
                </div>
            <div className='text-[#ffffff] flex w-[auto] h-[auto] ml-[20px]'>
                <BeAchamp val="1000"/>
                <div className='text-[#ffffff] absolute text-center  w-[321px] h-[50px] top-[300px] rounded-[8px] border-[1px] border-[white]'>
                       Submit Work
                 </div>
                </div>
        </div>
        

    
    </div>
    </div>
  )
}

export default RouteGuardAdmin(MissionForUser)