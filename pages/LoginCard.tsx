declare var window: any;
import WalletAuth from "@/utils/authentication/walletAuth";
import GoogleSignInButton from "@/utils/authentication/googleAuth";
import { useRouter } from "next/router";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import MagicLinkPopup from "./MagicLinkPopup";
import { supabase } from "@/utils/supabaseClient";

const LoginCard = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const router = useRouter();
  const onConnect = WalletAuth();
  const onSign = GoogleSignInButton();
  const [OpenMagic, setOpenMagic] = useState(false);
  function onMagicClick() {
    setOpenMagic(!OpenMagic);
  }
  const connectWallet = async () => {
    
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
        try {
          const { data, error } = await supabase
            .from("community_data")
            .select("*")
            .eq("wallet_id", accounts[0])
            .single();
            console.log(data);
            if(data!=null)
            window.localStorage.setItem('data', JSON.stringify(data));
        } catch (e) {
          console.log(e);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
    router.push('/WelcomeScreen1')
  };

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
      <div className="absolute left-[40vw] top-[50vh] flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
        <div className="card w-[420px] bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-3">Login Here!</h2>
            <div className="card-actions flex justify-center flex-wrap: nowrap">
              <button className="btn btn-success mx-2" onClick={onSign}>
                Google Login
              </button>
              <button className="btn btn-success mx-2" onClick={onMagicClick}>
                Magic Link
              </button>
              <button className="btn btn-success mx-2" onClick={connectWallet}>
                Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
