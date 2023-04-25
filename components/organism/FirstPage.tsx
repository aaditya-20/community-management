import React from 'react'
import Image from 'next/image'
export default function FirstPage() {
  return (
    <>
      <div className='bg-[#0c0c0c] h-[100vh] w-[100vw]'>
         <div className='flex content-center'>
           <Image src="/Icons/FireBondIcon.png" width={200} height={200} alt='FireBond'></Image>
           <button className='absolute border-[1px] bg-[red] rounded-[15px] h-[30px] w-[100px] my-[20px] mx-[10px] right-[20px]'>sign up</button>
           <button className='absolute border-[1px] bg-[red] rounded-[15px] h-[30px] w-[100px] my-[20px] mx-[10px] right-[150px]'>Log in</button>
         </div>
         <div className='relative left-[20vw]  text-white text-[100px] text-center leading-[1] top-[19vh]  w-[60vw]'>
            <h1>Scale web3 communities<span className='text-[red]'>10x Faster</span></h1>
         </div>
         <div className='absolute left-[20vw]  text-white text-[30px] text-center leading-[1] bottom-[15vh]    w-[60vw]'>
            <h1>Helping web3 communities Win through data and automation</h1>
         </div>
         
      </div>
    </>
  )
}
