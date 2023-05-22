import React, { useState } from "react";
import Quiz from "./Quiz";
import { IoIosAddCircleOutline } from "react-icons/io";
import Image from "next/image";
const QuizCard = () => {
  const [on, setOn] = useState(false);
  return (
    <div className="max-w-[749px] h-auto rounded-[20px] bg-[#232B35] p-6 relative mb-6">
      <h1 className="text-white font-normal text-xl mb-[37px]">
        Write the questions
      </h1>
      <div className=" absolute border-[0.5px] border-[#474C52] h-0 left-0 right-0 top-[72px]"></div>
      <Quiz/>
      {/* <Quiz/> */}
      {/* Rendering Quizes */}
      {/* Add More Quiz functionality */}
      <div className="flex gap-[10px] mb-[51px] mt-10">
        {/* <Image
          src="Icons/add.svg"
          alt=""
          height={29}
          width={29}
          onClick={() => {
            setOn(!on);
          }}
          className="cursor-pointer"
        /> */}
        {/* <Image src="Icons/Line.svg" alt="" height={0} width={659} /> */}
      </div>
    </div>
  );
};
export default QuizCard;