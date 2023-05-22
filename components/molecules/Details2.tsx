import EditMission from "@/utils/EditMission";
import MissionFormData from "@/utils/MissionFormData";
import Image from "next/image";
import React, { useState } from "react";

const Details2 = (props :any) => {
  const [on, setOn] = useState(false);
  const [conditions, setConditions] = useState([""]);
  const[description,setDescription] = useState(props.description)
  const obj = MissionFormData();
  const [descriptionError,setdescriptionError] = useState(obj.description==''||obj.description==undefined?true:false);
  
  
  const handleClick = (value: string) => {
    if (conditions[0] == "") {
      const newConditions = [value];
      setConditions(newConditions);
    } else {
      if (!conditions.includes(value)) {
        const newConditions = [...conditions, value];
        setConditions(newConditions);
      }
    }
  };
  function handleDescription(e:any){
    setDescription(e.target.value)
    if(e.target.value.length&&e.target.value.length>0){
      setdescriptionError(false);
    }
    else{
      setdescriptionError(true);
    }
  }

  obj.description = description;

 

  



  const handleSubmit = () => {
    setOn(false);
  };

  return (
    <div>
      <div className="w-[749px] h-auto rounded-[20px] bg-[#232B35] p-6 mb-[12px] relative">
        <div>
          <h1 className="font-normal text-[20px] leading-[27px] mx-6 text-white">
            Details
          </h1>
          <div className="w-full h-0 border-[0.5px] border-[#474C52] mt-[21px] mb-6 absolute left-0"></div>
        </div>
        <h1 className="font-medium text-base text-white mb-[12px] mt-[45px]">
          Description
        </h1>
        <div className="h-[103px] w-full bg-[#2E363F]  text-ellipsis rounded-lg mb-6">
          <textarea
            className="h-full w-full overflow-hidden text-ellipsis outline-none resize-none pt-[16.21px] px-[18.38px] bg-inherit placeholder:text-[#D0D0D0A6] text-white text-[12px] leading-[16.2px]"
            placeholder={"Add description to let the members know more about your mission"}
            value ={description}
            onChange={handleDescription}
            
          />
       {descriptionError && (
          <span className="text-sm text-red-500">*Please enter some description</span>
        )}
          
        </div>
        
        {conditions[0] != "" ? (
          <div className="flex gap-[10px]">
            {conditions?.map((item, index) => {
              return (
                <div key={index}>
                  <div className=" border border-[#757575] w-[65px] h-[36px] flex justify-center items-center rounded-[4px] text-[#AAAAAA] font-normal text-sm">
                    {item}
                  </div>
                </div>
              );
            })}
            
          </div>
        ) : (
          <div className="flex gap-[10px]">
            
            
          </div>
        )}
      </div>
      
      
    </div>
  );
};

export default Details2;
