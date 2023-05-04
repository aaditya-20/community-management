import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LoginCard from "./LoginCard";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import LoginSection from "./LoginSection";
import SignupSplit from "./SignupSplit";
export default function FirstPage() {
  const router = useRouter();
  const [OpenLogin, setOpenLogin] = useState(false);
  const [OpenSignUp, setOpenSignup] = useState(false);
  function onLoginClick() {
    setOpenLogin(!OpenLogin);
  }
  function onSignUpClick() {
   setOpenSignup (!OpenSignUp)
  }
  return (
    <>
      <Modal
        onClose={() => {
          setOpenLogin(!OpenLogin);
        }}
        open={OpenLogin}
        style={{}}
      >
        <div className="absolute flex right-[30vw] top-[30vh]">
          <LoginSection />
        </div>
      </Modal>
      <Modal
        onClose={() => {
          setOpenSignup(!OpenSignUp);
        }}
        open={OpenSignUp}
        style={{}}
      >
        <div>
          <SignupSplit />
        </div>
      </Modal>
      <div className="bg-[#0c0c0c] h-[100vh] w-[100vw]">
        <div className="flex content-center">
          <Image
            src="/Icons/FireBondIcon.png"
            width={200}
            height={200}
            alt="FireBond"
          ></Image>
          <button
            className="absolute border-[1px] bg-[red] rounded-[15px] h-[30px] w-[100px] my-[20px] mx-[10px] right-[20px]"
            onClick={onSignUpClick}
          >
            sign up
          </button>
          <button
            className="absolute border-[1px] bg-[red] rounded-[15px] h-[30px] w-[100px] my-[20px] mx-[10px] right-[150px]"
            onClick={onLoginClick}
          >
            Log in
          </button>
        </div>
        <div className="relative left-[20vw]  text-white text-[100px] text-center leading-[1] top-[19vh]  w-[60vw]">
          <h1>
            SCALE WEB3 COMMUNITIES<span className="text-[red]">10X FASTER</span>
          </h1>
        </div>
        <div className="absolute left-[20vw]  text-white text-[30px] text-center leading-[1] bottom-[15vh]    w-[60vw]">
          <h1>Helping web3 communities Win through data and automation</h1>
        </div>
      </div>
    </>
  );
}
