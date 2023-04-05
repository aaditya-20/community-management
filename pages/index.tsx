import { FaDiscord, FaTwitter } from 'react-icons/fa';
import IconButton from '../components/atoms/IconButton';
import { ReactElement } from 'react';
import Card from "../components/atoms/Card"
import Link from 'next/link'
const HomePage = (): ReactElement => {

  return (
    <>
      <Card title="" text="" />
       <div className='absolute w-[662px] h-[54px] left-[350px] top-[140px] border-b-[1px]'>
       <Link href="/" className='relative top-[15px] left-[30px] text-[#AEABD8]'>SIGN UP</Link>
        
        </div>
        <div className='absolute  left-[350px] top-[220px]'>
          <p className='relative w-[236px] h-[32px] top-[0px] left-[30px] text-[#FFFFFF] font-sans font-normal font-bold:text-600 text-2xl leading-8'>What do we call you?</p>
          <p className='relative w-[200px] h-[22px] top-[10px] left-[30px] font-sans font-normal text-base leading-6 text-gray-500'>Tell us your name?</p>
        </div>
      
    </>
  );
};

export default HomePage;
