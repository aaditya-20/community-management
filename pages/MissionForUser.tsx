import React, { useEffect, useState } from "react";
import BeAchamp from "@/components/molecules/BeAchamp";
import MissionStepsCard from "@/components/molecules/MissionStepCard";
import Image from "next/image";
import router from "next/router";
import { supabase } from "@/utils/supabaseClient";
import EditMission from "@/utils/EditMission";
import { useRouter } from "next/router";
import MissionFormData from "@/utils/MissionFormData";
import UserHeader from "@/components/molecules/UserHeader";
import UserSidebar from "@/components/molecules/UserSidebar";
declare var window: any;
// const [file, setFile] = useState("");
var community_id = "";
  var user_wallet_id = "";
function MissionForUser(props: any) {
  // you cant extend props as it is a non extensible object (to be resolved)
  // to implement router vaali thing after khana khaakey.
  const [type, setType] = useState(5);
  const [fileName, setFileName] = useState("");
  const obj2 = EditMission();
  let obj = MissionFormData();
  const [missionUrl, setmissionUrl] = useState("");
  const router = useRouter();
  const [title, settitle] = useState("Mission title");
  const [copyLink, setcopyLink] = useState("Copy");
  const [description, setdescription] = useState(`here comes the description.`);
  const [tags, settags] = useState(["NoTags"]);
  const [missionSteps, setmissionSteps] = useState([
    "Heading 1",
    "Subheading 1",
    "Heading 2",
    "Subheading2",
  ]);
  const [reward, setreward] = useState(1000);
  const [coinType, setcoinType] = useState("USDC");
  let missionDetails: any;
  console.log(router.query.myData);
  if (router.query.myData !== undefined) {
    missionDetails = JSON.parse(router.query.myData as string);
  } else {
    missionDetails = {};
  }
  const [data, setData] = useState();
  useEffect(() => {
    setreward(missionDetails.amount);
    let newTags: any = [];

    if (missionDetails.tags != null && missionDetails.tags != undefined) {
      newTags = [];
      missionDetails.tags.map((val: any) => {
        newTags.push(val.title);
      });
    }

    setmissionUrl(
      `${
        typeof window == "undefined" ? "dontknow" : window.location.origin
      }/missions/${missionDetails.mission_id}`
    );
    settags(newTags);
    settitle(missionDetails.title);
    setdescription(missionDetails.description);
    setmissionSteps([
      missionDetails.heading1 || "NotAvailable",
      missionDetails.subheading1 || "NotAvailable",
      missionDetails.heading2 || "NotAvailable",
      missionDetails.subheading2 || "NotAvailable",
    ]);
  }, [router.query.myData]);

  // const coinType = "USDC";
  const [walletAddress, setWalletAddress] = useState("");
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("yahan aa raha");
      const storedJsonData = localStorage.getItem("data");
      const storedJsonwallet = localStorage.getItem("user_wallet_id");
      const storedJsonCommunity = localStorage.getItem("community_id");
      const jsonData = JSON.parse(storedJsonData ?? "{}");
      // console.log(storedJsonwallet,storedJsonCommunity)
      if (storedJsonCommunity !== null) {
        community_id = storedJsonCommunity;
      }
      if (storedJsonwallet !== null) {
        user_wallet_id = storedJsonwallet;
      }
      const arr = ["file", "link", "url", "invite", "text", "empty"];
      arr.forEach((item, index) => {
        if (item === missionDetails.submission_type) {
          console.log("dekho", missionDetails.submission_type);
          setType(index);
        }
      });
      console.log("mission detalis ka submission type", type);
    }
  }, []);

  async function fetchData(xp: any) {
    try {
      // Fetch the community data row using the user's wallet_id as a filter condition
      const { data: rowData, error } = await supabase
        .from("community_data")
        .select("*")
        .eq("id", community_id)
        .single()
        
      if (error) {
        console.error("error aa raha", error);
        return;
      }
      console.log("sahi chal raha sab", rowData);
      // setCommunityName(rowData.community_name);
     let updated_rowData = rowData;
     
     updated_rowData.Members.forEach((val:any,index:any)=>{
              if(val.user_wallet_id===user_wallet_id){
                     console.log('in');
                     console.log(updated_rowData.Members[index].current_xp,xp,index);
                     
                    updated_rowData.Members[index].current_xp += Number(xp);  
                    updated_rowData.Members[index].missions_completed.push({
                          missionId:missionDetails.mission_id,
                          Date_Of_Completion: new Date(),
                    })
                    
              }
     })
     console.log('updated data',updated_rowData,'previous data',rowData);
     
            const { data: new_data2, error: new_error2 } = await supabase
                                            .from("community_data")
                                            .update({
                                              Members: updated_rowData.Members,
                                  
                                            })
                                            .eq("id", Number(community_id));
                                          if (new_error2) {
                                            console.log(
                                              "erorr in updating members data in community data when a user is a new user",
                                              new_error2
                                            );
                                          } else {
                                            // push him to your space.

                                            console.log("xp is distributed and missions are pushed in its array");
                                            router.push('/YourSpace');
                                          }
      // const members = updated_rowData.Members.filter(
      //   (item: any,index:any) =>{ 
      //     if(item.user_wallet_id === user_wallet_id){
            
      //       console.log('in');
      //       return true;
      //           // updated_rowData.Members[index] += xp; 
      //     }
      //   }
      // );
      // updated_rowData.
      // console.log(members[0]);
      //update here in the supabase xp of member
    } catch (err) {
      console.error(err);
    }
  }

  async function HandleSubmit() {
    // Also need to store data to put in Admin's Review Section
    // if admin->routerpush-edit
    // else
    // await connectWallet();
    console.log("clicked");

    // not recieving xp inside mission so replacing it with amount.
    let xp = missionDetails.amount;
    console.log(xp);
    if(xp==undefined){
      xp = 0;
    }
    console.log(xp);
     fetchData(xp);

    //community id leni hai local storage se

    //us community ke saare members pe jaana hai jo match kiya uska xp badhana hai

    // router.push("/YourSpace");
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name) {
      setFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen min-w-fit bg-[#171C23] flex scrollbar-hide">
      <UserSidebar />
      <div className="w-full h-full">
        <UserHeader />
        <div className="w-full h-[80px] border-b border-[#353B43] flex items-center">
          <Image
            src="/Icons/firebondLogo.svg"
            width={160}
            height={10}
            alt="alt"
            className=""
          />
        </div>

                   <div className="flex mt-5">
                 <div className="text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43]  rounded-[20px]">
              <Image
                    src="Icons/TechnicalBg.svg"
                    width={800}
                    height={1}
                    alt="kjdfhah"
                    className="mx-[10px] my-[10px]"
                  />
                  <div className="font-semibold text-2xl text-white mx-3">
                    {title}
                  </div>
                  <div className="font-medium text-lg text-gray-400 mx-3 mt-4 w-[800px]">
            <pre className="overflow-auto no-scrollbar">{description}</pre>
            {/* <div className="my-[60px]">
              <MissionStepsCard
                heading1={missionSteps[0]}
                descp1={missionSteps[1]}
                heading2={missionSteps[2]}
                descp2={missionSteps[3]}
              />
            </div> */}
          </div>
                  {type == 0 && (
                    <div className="mt-[36px]">
                      <h1 className="font-medium text-base text-white mb-[11px]">
                        Upload the file
                      </h1>
                      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] px-[25px] ">
                        <Image
                          src="Icons/upload.svg"
                          alt=""
                          height={20}
                          width={20}
                        />
                        <input
                          type="file"
                          className=" absolute w-full h-full outline-none bg-inherit opacity-0"
                          onChange={handleFileUpload}
                        />
                        <h1 className="text-xs text-[#D0D0D0A6] font-normal">
                          {fileName ? fileName : "Upload the submission"}
                        </h1>
                      </div>
                      <h1 className="text-xs text-[#A6A6A6] font-normal mt-[9px]">
                        File can be pdf, png, jpeg, doc.x
                      </h1>
                    </div>
                  )}
                  {type == 1 && (
                    <div className="mt-[36px]">
                      <h1 className="font-medium text-base text-white mb-[11px]">
                        Enter the Link
                      </h1>
                      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
                        <input
                          type="url"
                          className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
                          placeholder="Enter the Link"
                        />
                      </div>
                    </div>
                  )}
                  {type == 2 && (
                    <div className="mt-[36px]">
                      <h1 className="font-medium text-base text-white mb-[11px]">
                        Enter the URL
                      </h1>
                      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
                        <input
                          type="url"
                          className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
                          placeholder="Enter URL"
                        />
                      </div>
                    </div>
                  )}
                  {type == 3 && (
                    <div className="mt-[36px]">
                      <h1 className="font-medium text-base text-white mb-[11px]">
                        Number of invites
                      </h1>
                      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
                        <input
                          type="number"
                          className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
                          placeholder="number of invites"
                        />
                      </div>
                    </div>
                  )}
                  {type == 4 && (
                    <div className="mt-[36px]">
                      <h1 className="font-medium text-base text-white mb-[11px]">
                        Enter Text
                      </h1>
                      <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
                        <input
                          type="text"
                          className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
                          placeholder="Enter text"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col text-[#ffffff] mx-[auto] cursor-pointer ">
                  <BeAchamp title={title} tags={tags} val={reward} />
                  <div onClick={()=>{
                    HandleSubmit();
                  }} className='cursor-pointer mt-[30px] text-center align-middle  font-[500] font-[General Sans] text-[14px]  w-[346px] h-[47px] rounded-[8px] border-white border-[1px]'>
                  <span className='relative top-3'>Submit</span> 
                </div>
                </div>
              </div>
            </div>
          </div>
       


    // <div>
    //   <div className="min-h-screen min-w-fit bg-[#171C23] flex  scrollbar-hide">
    //     <UserSidebar />
    //     <div className="h-full w-full">
    //       <UserHeader />
    //       <div className="h-full w-full  flex justify-between">
    //         <div className="grid grid-cols-[1400px] gap-10  bg-[#171C23] grid-rows-[71px,auto] h-[1200px] w-[auto] ">
    //           <div className="flex align-middle border-b-[1px] border-b-[#353B43]">
    //             <Image
    //               src="/Icons/FireBondIcon.png"
    //               width={160}
    //               height={10}
    //               alt="alt"
    //               className=""
    //             />
    //           </div>

    //           <div className="flex">
    //             <div className="text-[#ffffff] ml-[20px] mb-[10px] w-[auto]  border-[1px] border-[#353B43]  rounded-[20px]">
    //               <Image
    //                 src="Icons/TechnicalBg.svg"
    //                 width={800}
    //                 height={1}
    //                 alt="kjdfhah"
    //                 className="mx-[10px] my-[10px]"
    //               />
    //               <div className="font-semibold text-2xl text-white mx-3">
    //                 {title}
    //               </div>

    //               {type == 0 && (
    //                 <div className="mt-[36px]">
    //                   <h1 className="font-medium text-base text-white mb-[11px]">
    //                     Upload the file
    //                   </h1>
    //                   <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] px-[25px] ">
    //                     <Image
    //                       src="Icons/upload.svg"
    //                       alt=""
    //                       height={20}
    //                       width={20}
    //                     />
    //                     <input
    //                       type="file"
    //                       className=" absolute w-full h-full outline-none bg-inherit opacity-0"
    //                       onChange={handleFileUpload}
    //                     />
    //                     <h1 className="text-xs text-[#D0D0D0A6] font-normal">
    //                       {fileName ? fileName : "Upload the submission"}
    //                     </h1>
    //                   </div>
    //                   <h1 className="text-xs text-[#A6A6A6] font-normal mt-[9px]">
    //                     File can be pdf, png, jpeg, doc.x
    //                   </h1>
    //                 </div>
    //               )}
    //               {type == 1 && (
    //                 <div className="mt-[36px]">
    //                   <h1 className="font-medium text-base text-white mb-[11px]">
    //                     Enter the Link
    //                   </h1>
    //                   <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
    //                     <input
    //                       type="url"
    //                       className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
    //                       placeholder="Enter the Link"
    //                     />
    //                   </div>
    //                 </div>
    //               )}
    //               {type == 2 && (
    //                 <div className="mt-[36px]">
    //                   <h1 className="font-medium text-base text-white mb-[11px]">
    //                     Enter the URL
    //                   </h1>
    //                   <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
    //                     <input
    //                       type="url"
    //                       className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
    //                       placeholder="Enter URL"
    //                     />
    //                   </div>
    //                 </div>
    //               )}
    //               {type == 3 && (
    //                 <div className="mt-[36px]">
    //                   <h1 className="font-medium text-base text-white mb-[11px]">
    //                     Number of invites
    //                   </h1>
    //                   <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
    //                     <input
    //                       type="number"
    //                       className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
    //                       placeholder="number of invites"
    //                     />
    //                   </div>
    //                 </div>
    //               )}
    //               {type == 4 && (
    //                 <div className="mt-[36px]">
    //                   <h1 className="font-medium text-base text-white mb-[11px]">
    //                     Enter Text
    //                   </h1>
    //                   <div className="rounded-lg h-[41px] w-full flex gap-[14px] items-center relative bg-[#2E363F] overflow-hidden ">
    //                     <input
    //                       type="text"
    //                       className="w-full h-full outline-none bg-inherit text-xs placeholder:text-[#D0D0D0A6] text-white font-normal overflow-hidden text-ellipsis  px-[25px]"
    //                       placeholder="Enter text"
    //                     />
    //                   </div>
    //                 </div>
    //               )}
    //             </div>
    //             <div className="flex flex-col text-[#ffffff] mx-[auto] ">
    //               <BeAchamp title={title} tags={tags} val={reward} />
    //               <button
    //                 onClick={HandleSubmit}
    //                 className="mt-[30px] text-center align-middle  font-[500] font-[General Sans] text-[14px]  w-[346px] h-[47px] rounded-[8px] border-white border-[1px]"
    //               >
    //                 Submit Work
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default MissionForUser;
