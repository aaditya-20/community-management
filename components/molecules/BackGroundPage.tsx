
import Image from "next/image";
import Head from "next/head";
export default function BackGroundPage() {
  return (
   
        <>
   
            <div className="flex items-center justify-center bg-[#1E1E1E]  min-h-screen">
            <Image src="/Icons/FireBondIcon.png" alt="My Image" width={500} height={500} className=" absolute top-10 w-[193px] h-[68.1px] m-auto" />
            </div>
          </>
  );
}
