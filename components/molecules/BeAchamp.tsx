import React from 'react'

const BeAchamp = (props:any) => {
  return (
    <div className="bg-gray-800 absolute w-56 h-270 left-290 top-195 ">
        <h1 className="text-xl font-bold mb-4 text-white">Be A Champion</h1>
        <div className="bg-gray-600"><hr ></hr></div>
        <div className='flex'>
            <div>
                <div  className="p-1 m-2 bg-gray font- mb-3 text-white ">
                    <p className='text-s text-gray-400 h-10'> Reward</p>
                </div>
            <div>
            <div  className="m-3 bg-gray font- mb-4 text-white ">
                    <p className='text-s text-gray-400 h-10'>Tags </p>
                 </div>
            </div>
            </div>
            <div>
        <button className="bg-yellow-600  border- rounded-[8px] w-[103px] h-[34px] text-yellow m-1 p-1 font-bold mb-3 text-yellow-400 h-8 w-20"><p> {props.val} USDC </p></button>
        <button className="bg-gray-600 text-m m-1 p-1 font- mb-3 text-white h-8 w-30"><p>📢onboarding </p></button>
        </div>
        </div>
        </div>
  )
}

export default BeAchamp