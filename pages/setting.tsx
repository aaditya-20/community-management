import { useState, useEffect } from "react";
import Sidebar from "../components/molecules/Sidebar";
import Header from "../components/atoms/Header";
import { supabase } from "../utils/supabaseClient";

const { isAddress } = require("ethereum-address");

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");

  if (typeof window !== "undefined") {
    //supabase code retriving users informtion from database
    const storedJsonData = localStorage.getItem("data");
    const jsonData = JSON.parse(storedJsonData ?? "{}");
    let name = jsonData.name;
    let emailId = jsonData.email;
    let walletId = jsonData.wallet_id;
    // console.log(name,emailId,walletId)

    const handleInputChange = (event: any) => {
      setUsername(event.target.value);
    };
    const handelEmailChange = (event: any) => {
      setEmail(event.target.value);
    };
    const handleWalletChange = (event: any) => {
      setWallet(event.target.value);
    };
    const handelEmailClick = async () => {
      const { data: dataUpdate, error: updateError } = await supabase
        .from("community_data")
        .update({ email: `${emailId}` })
        .eq("wallet_id", walletId);
      if (updateError) {
        alert("Error");
      } else {
        alert(`Username Updated Successfully ${email}`);
      }
      // localStorage.setItem("email",email);
      // alert("Email updated successfully");
    };
    //Updating username
    const handleUpdateClick = async () => {
      const { data: dataUpdate, error: updateError } = await supabase
        .from("community_data")
        .update({ name: `${username}` })
        .eq("wallet_id", walletId);
      if (updateError) {
        alert("Error");
      } else {
        alert(`Username Updated Successfully:${username}`);
      }
      //localStorage.setItem("username",username);
      // alert("Username updated successfully");
    };

    const handelWalletClick = async () => {
      const ethAddress = wallet; // Replace with the Ethereum address you want to validate

      if (isAddress(ethAddress)) {
        console.log("Valid Ethereum address");
        const { data: dataUpdate, error: updateError } = await supabase
          .from("community_data")
          .update({ wallet_id: `${walletId}` })
          .eq("wallet_id", walletId);
        if (updateError) {
          alert("Error");
        } else {
          alert(`Wallet Address Updated Successfully with:${wallet}`);
        }
      } else {
        console.log("Invalid Ethereum address");
        alert("Invalid Ethereum address");
      }

      // localStorage.setItem("wallet",wallet);
      // alert("Wallet updated successfully");
    };
    const handelDelete = async () => {
      const { data: dataUpdate, error: updateError } = await supabase
        .from("community_data")
        .delete()
        .eq("wallet_id", walletId);

      if (confirm("Are you sure you want to delete your account?")) {
        if (updateError) {
          alert("Error");
        } else {
          alert(`Account Deleted Successfully`);
        }
        localStorage.clear();
        window.location.href = "/";
      }
    };

    return (
      <>
        <div className="min-h-screen bg-[#171C23] flex overflow-x-hidden">
          <Sidebar />
          <div className="h-full w-full">
            <Header />
            <div className="ml-[20px] justify-between">
              <div className=" px-6 pt-[29px] ">
                <section className="first-section">
                  <div className="profile-img">
                    <img src="/Avatar.png" alt="profile" />
                  </div>
                  <div className="links-zone ml-[20px]">
                    <span> Email </span>
                    <span> discord </span>
                    <button> Twitter </button>
                    <button> LinkedIn </button>
                  </div>
                </section>
              </div>
              <div>
                <label className="label">
                  Username <br />
                  <div className="w-1/2">
                    <input
                      type="text"
                      value={username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    className="updateButton mt-[10px]"
                    onClick={handleUpdateClick}
                  >
                    {" "}
                    Update{" "}
                  </button>
                </label>
              </div>
              <label className="label">
                Email <address></address>
                <div className="w-1/2">
                  <input
                    type="email"
                    value={email}
                    onChange={handelEmailChange}
                  />
                </div>
                <button
                  className="updateButton mt-[10px]"
                  onClick={handelEmailClick}
                >
                  {" "}
                  Update{" "}
                </button>
              </label>
              <span>
                {" "}
                Please enter your address so that we can send you web3 newslater{" "}
              </span>
              <section className="second-section">
                <div> Reward Section </div>
                <label className="label">
                  Wallet Address <address></address>
                  <div className="w-1/2">
                    <input
                      type="text"
                      value={wallet}
                      onChange={handleWalletChange}
                    />
                  </div>
                  <button
                    className="updateButton mt-[10px]"
                    onClick={handelWalletClick}
                  >
                    {" "}
                    Update{" "}
                  </button>
                </label>
                <span>
                  {" "}
                  Please enter your address so that we can send you rewards{" "}
                </span>
              </section>
              <section className="section-three">
                <div> Danger Zone </div>
                <button> Delete My Account </button>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}
