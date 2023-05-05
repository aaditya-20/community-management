import React from "react";
import Sidebar from "@/components/molecules/Sidebar";
import Header from "@/components/atoms/Header";
import NavbarMissionOnboarding from "@/components/molecules/NavbarMissionOnboarding";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";

export default function MissionDigitalMascot() {
  const[project,setProject] = useState('')
  const[file,setFile] = useState(null)
  const bucket_name = 'Store';

  async function handleSubmit(){
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".png, .jpg, .jpeg";
    input.hidden = true;
    input.addEventListener("change", async () => {
      const files = input.files;
      if (files && files.length > 0) {
        const file = files[0];
        console.log(file);
        const { data, error } = await supabase.storage
          .from(bucket_name)
          .upload(`digital_mascot/${file.name}`, file, {
            cacheControl: "3600",
            upsert: false,
          });
        if (error) {
          console.error(error);
        } else {
          console.log(data);
        }
      }
    });
    input.click();
  }

 function handleProject(e:any){
    setProject(e.target.value)
 }

 function handleChange(e : any) {
    setFile(e.target.files[0]);
  }

 

 
 
  
  

  return (
    <div>
      <div className="grid grid-cols-[auto,auto] gap-0  bg-[#171C23] grid-rows-[71px,100px,auto] h-[1500px] w-[1400px] md:grid-cols-[auto,1fr]">
        <div className="row-span-3 border-r-[1px] border-r-[#353B43]">
          <Sidebar />
        </div>
        <div className="border-b-[1px] border-b-[#353B43]">
          <Header />
        </div>
        <div className="">
          <NavbarMissionOnboarding />
        </div>
        <div className="flex">
          <div className="text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43] rounded-[20px]">
            <Image
              src="/../public/Icons/MissionPageBanner.png"
              width={800}
              height={1}
              alt="kjdfhah"
              className="mx-[10px] my-[10px]"
            />
            <div className="mx-[30px] my-[30px]">
              <div className="font-[600] text-[24px] text-[#ffffff] mb-3">
                Design our company digital mascot
              </div>
              <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="mb-5">
                  <label
                    htmlFor="icon"
                    className="block text-white-700 font-bold "
                  >
                    Name Of Project
                  </label>
                  <input
                    type="text"
                    id="icon"
                    name="icon"
                    value={project}
                    onChange={handleProject}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="file-upload">
                    Upload a GIF or WEBP file:
                  </label>
                  <input id="file-upload" type="file" accept=".gif,.webp" onChange={handleChange} />
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    style={{
                      top: "0px",
                      left: "0px",
                      position: "relative",
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>

              <Image
                src="/../public/Icons/DigitalMascot.png"
                width={255}
                height={255}
                alt="kjdfhah"
                className="mx-[auto] my-[30px] mb-[10px]"
              />
            </div>
          </div>
          <div className="text-[#ffffff] w-[auto] h-[auto] ml-[20px]">
            <BeAchamp val="1000" />
          </div>
        </div>
      </div>
    </div>
  );
}
