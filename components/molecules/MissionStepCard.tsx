import React from 'react'

const MissionStepsCard = (props:any) => {
  return (
    <div className="bg-[#232B35] absolute w-469 h-315 left-715 top-195 ">
        <h1 className="text-xl font-bold mb-4 text-white px-4">Missions steps</h1>
        <div className='flex'>
            <div>
        <div className="absolute left-[13px] bg-black text-m font- mb-3 text-white w-16 "><p>Step 1</p></div>
        <div className="m-4 p-6 border-l-2 border-dotted border-gray-700 "></div>
        <div className="absolute left-[13px] bg-black text-m font- mb-3 text-white w-16"><p>Step 2</p></div>
        </div>
            <div>
                <div  className="p-5 m-2 bg-gray font- mb-3 text-white h-20 w-75 border-2 border-gray-700">
                    <h2 className="text-xl font-bold">{props.heading1}</h2>
                    <p className='text-s text-gray-400 h-10'>{props.descp1}</p>
                 </div>
            <div>
            <div  className="p-5 m-2 bg-gray font- mb-3 text-white h-20 w-75 border-2 border-gray-700">
                    <h2 className="text-xl font-bold">{props.heading2}</h2>
                    <p className='text-s text-gray-400 h-10'>{props.descp2} </p>
                 </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MissionStepsCard