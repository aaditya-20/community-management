import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { VscBlank } from "react-icons/vsc";
import IconButton from '../atoms/IconButton';
import ProfileIcon from '../atoms/ProfileAvatar';
import BackGroundPage from '../molecules/BackGroundPage';
import { ReactElement } from 'react';
import Card from "../atoms/Card"
import Link from 'next/link'
import TextInput from '../atoms/TextInput';
const CommunitySetupScreen = (): ReactElement => {

  return (
    <>
      <BackGroundPage/>
      <div className="flex items-center">
      <Card title="" text="" />

       <div className='absolute w-[662px] h-[54px] left-[350px] top-[140px] border-b-[1px] border-[#353B43]'>
       <Link href="/" className='relative top-[15px] left-[30px] text-[#AEABD8]'>SIGN UP</Link>
        
        </div>
        <div className='absolute  left-[350px] top-[220px]'>
          <p className='relative w-[236px] h-[32px] top-[0px] left-[30px] text-[#FFFFFF] font-sans font-normal font-bold:text-600 text-2xl leading-8'>What do we call you?</p>
          <p className='relative w-[200px] h-[22px] top-[10px] left-[30px] font-sans font-normal text-base leading-6 text-gray-500'>Tell us your name?</p>
          <div className='relative top-[105px] left-[53px] font-[Roboto] font-bold text-[#848484] w-[13.54px] h-[27.88px] text-[28px]'>+</div>
          <ProfileIcon size={94} imageUrl="/Icons/DefaultUserIcon.png" alt='nothing' classNameCircle=' relative top-[50px] left-[30px] border-dashed border-[0.7px] border-white' classNameImage='relative left-[22px] top-[26px] w-[51.6px] h-[42.24px]'  />
          <TextInput placeholder='Name' label='Enter Name' className='relative top-[-25px] left-[154px] w-[426px] h-[41px]' classNameInput='w-[426px] h-[41px] bg-[#2E363F] rounded-lg text-white font-[General Sans] font-medium' classNameLabel='font-medium text-base leading-6 text-white font-[General Sans] w-[85px] h-[22px]' />
          <IconButton icon={FaDiscord} label="Discord" className="relative bg-[#8570E4] top-[89px] left-[0px] w-[331px] h-[67px]"  />
          <IconButton icon={VscBlank} label="Continue" className="relative bg-[#FE702A] top-[22px] left-[331px] w-[331px] h-[67px]"  /> 
        </div>
        <p className='absolute font-[General Sans] left-[600px] top-[600px] font-normal text-base leading-6 text-white font-generalsans'>Already have account? <Link href="/" className='font-[General Sans] text-[#A6A6A6CC]'>Sign in</Link></p>
        </div>
        
    </>
  );
};

export default CommunitySetupScreen;
