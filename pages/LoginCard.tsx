import WalletAuth from "@/utils/authentication/walletAuth";
import GoogleSignInButton from "@/utils/authentication/googleAuth";
import { useRouter } from "next/router";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import MagicLinkPopup from "./MagicLinkPopup";

const LoginCard = () => {
  const onConnect = WalletAuth();
  const onSign = GoogleSignInButton();
  const [OpenMagic, setOpenMagic] = useState(false);
  function onMagicClick() {
    setOpenMagic(!OpenMagic);
  }

  return (
    <>
     <Modal
        onClose={() => {
          setOpenMagic(!OpenMagic);
        }}
        open={OpenMagic}
        style={{}}
      >
        <div className="absolute left-[-100px] top-[-150px]">
          <MagicLinkPopup />
        </div>
      </Modal>
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="card w-[420px] bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-3">Login Here!</h2>
          <div className="card-actions flex justify-center flex-wrap: nowrap">
            <button className="btn btn-success mx-2" onClick={onSign}>Google Login</button>
            <button className="btn btn-success mx-2" onClick={onMagicClick}>Magic Link</button>
            <button className="btn btn-success mx-2" onClick={onConnect}>Wallet</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginCard;
