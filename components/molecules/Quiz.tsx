import QuizMission from "@/utils/QuizMission";
import React, { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
const Quiz = (props:any) => {
  const [question, setQuestion] = useState("");
  const [True,setTrue] = useState("true");
  const obj = QuizMission();
  obj.ques = question;
  obj.ans = True;
  
  return (
    <div className="w-full h-auto mb-[31px]">
      <div className="w-full flex justify-between gap-[17px]">
        {/* enter question */}
        <div className="w-full bg-[#474C52] rounded-lg overflow-hidden h-[42px]">
          <input
            className="w-full px-6 h-full outline text-white font-medium text-base bg-inherit placeholder:text-white"
            placeholder="question"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
        </div>
        {/* delete button */}
        <div className="h-[41px] w-[42px] bg-[#474C52] rounded-[4px] flex justify-center items-center cursor-pointer mb-[25px]" onClick={()=>props.delete(props.id)}>
          <BsTrash3 />
        </div>
      </div>
      {/* True  / Choice  */}
      <div className="flex gap-4 items-center mb-5">
        <button onClick={()=>{setTrue('true')}} className={`w-4 h-4 rounded-full border border-white cursor-pointer ${True === 'true' ? "bg-white" : ""}`}></button>
        <h1 className="text-sm font-normal text-[#D0D0D0]">True</h1>
      </div>
      {/* False option / Add options */}
      <div className="flex gap-4 items-center mb-5">
        <button onClick={()=>{setTrue('false')}} className={`w-4 h-4 rounded-full border border-white cursor-pointer ${True === 'false' ? "bg-white" : ""}`}></button>
        <h1 className="text-sm font-normal text-[#D0D0D0]">False</h1>
      </div>
      <div className="w-full h-0 border-[0.5px] border-[#474C52]"></div>
    </div>
  );
};
export default Quiz;