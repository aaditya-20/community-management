import EditMission from "@/utils/EditMission";
import { useRouter } from "next/router";
import { HiPencil, HiRocketLaunch } from "react-icons/hi2";

const NavbarMissionOnboarding = (props: any) => {
  const obj2 = EditMission();
  const router = useRouter();
  function handleEdit() {
    obj2.title = props.title;
    obj2.description = props.description;
    obj2.heading1 = props.heading1;
    obj2.heading2 = props.heading2;
    obj2.description1 = props.subheading1;
    obj2.description2 = props.subheading2;

    router.push("/MissionTemplateEdit");
  }
  return (
    <div className="h-[115px] w-full border-b border-[#353B43] px-6 py-[28px]">
      <div className="h-full w-full">
        <h1 className="mb-2 text-[#A6A6A6] text-sm font-medium">
          Missions/template
        </h1>
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-white">Missions</h1>
          <div className="flex gap-4">
            <button
              className="px-7 h-[33px] flex justify-center items-center rounded-lg border border-[#A9A9A9] hover:border-[white] hover:text-white text-[#A9A9A9] font-normal text-sm hover:font-medium"
              onClick={() => {
                router.push("/MissionMain");
              }}
            >
              Back
            </button>
            <button className="px-7 h-[33px] flex justify-center items-center rounded-lg border border-[#A9A9A9] hover:border-[white] hover:text-white text-[#A9A9A9] font-normal text-sm hover:font-medium">
              <div className="flex justify-center items-center gap-2">
                <HiRocketLaunch size={16} />
                <h1>Publish</h1>
              </div>
            </button>
            <button
              className="px-7 h-[33px] flex justify-center items-center rounded-lg border border-[#A9A9A9] hover:border-[white] hover:text-white text-[#A9A9A9] font-normal text-sm hover:font-medium"
              onClick={() => {
                handleEdit();
              }}
            >
              <div className="flex items-center gap-2">
                <HiPencil size={16} />
                <h1>Edit</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className="sticky top-0  bg-[#171C23] border-b border-gray-800 h-[80px]">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex items-center">
    //         <div className="hidden md:block">
    //           <div className="flex items-baseline flex-col justify-center space-y-1 md:flex-row md:space-y-0 md:space-x-4">
    //             <div className="text-gray-300 text-sm ">Mission/Templates</div>
    //             <h1 className="text-white text-lg font-bold">Mission</h1>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex items-center">
    //         <div className=" md:block">
    //           <div className="flex items-baseline space-x-4 ">
    //             <button
    //               onClick={() => {
    //                 router.push("/MissionMain");
    //               }}
    //               className="bg-transparent text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:border-transparent"
    //             >
    //               Back
    //             </button>
    //             <button className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
    //               Publish
    //             </button>
    //             <button
    //               onClick={() => {
    //                 handleEdit();
    //               }}
    //               className="bg-transparent text-gray-300 hover:text-white px-3 py-2  rounded-md text-sm font-medium border border-gray-300 hover:border-transparent"
    //             >
    //               Edit
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavbarMissionOnboarding;
