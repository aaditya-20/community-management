import React from "react";
import { BiImageAdd } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import {
  FaDiscord,
  FaEthereum,
  FaGlobe,
  FaTelegramPlane,
} from "react-icons/fa";

const IntegrationsSettingPage = () => {
  return (
    <form className="w-[641px] h-auto rounded-[10px] mb-[70px] bg-[#232B35]">
      <div className="p-[37px] h-auto w-auto">
        <h1 className="mb-2 font-semibold text-2xl text-white">Integrations</h1>
        <h3 className="font-normal text-base text-[#A6A6A6]">
          Supercharge your workflow and connect the tool you use every day.
        </h3>
      </div>

      <div className="border-[0.5px] border-[#474C52] h-0 w-full " />

      <div className="h-auto w-auto mt-[37px] pb-[78px]">
        <div className="w-full h-[80px] px-[37px] flex justify-between items-center border-b border-[#353B43] mb-[10px]">
          <div className="flex gap-6">
            <div className="bg-[#6359E9] h-[46px] w-[46px] flex justify-center items-center rounded-[10px]">
              <FaDiscord size={24} />
            </div>

            <div>
              <h1 className="font-semibold text-base text-white">Discord</h1>
              <h3 className="font-normal text-sm text-[#A6A6A6]">
                Import roles and create discord based bounties
              </h3>
            </div>
          </div>

          <button className="w-[107px] h-[34px] rounded-lg border border-white flex justify-center items-center text-white font-normal text-sm">
            Connect
          </button>
        </div>

        <div className="w-full h-[80px] px-[37px] flex justify-between items-center border-b border-[#353B43] mb-[10px]">
          <div className="flex gap-6">
            <div className="bg-[#64CFF6] h-[46px] w-[46px] flex justify-center items-center rounded-[10px]">
              <BsTwitter size={24} />
            </div>

            <div>
              <h1 className="font-semibold text-base text-white">Twitter</h1>
              <h3 className="font-normal text-sm text-[#A6A6A6]">
                Import roles and create twitter based bounties
              </h3>
            </div>
          </div>

          <button className="w-[107px] h-[34px] rounded-lg border border-white flex justify-center items-center text-white font-normal text-sm">
            Connect
          </button>
        </div>

        <div className="w-full h-[80px] px-[37px] flex justify-between items-center border-b border-[#353B43] mb-[10px]">
          <div className="flex gap-6">
            <div className="bg-[#2298D5] h-[46px] w-[46px] flex justify-center items-center rounded-[10px]">
              <FaTelegramPlane size={24} />
            </div>

            <div>
              <h1 className="font-semibold text-base text-white">Telegram</h1>
              <h3 className="font-normal text-sm text-[#A6A6A6]">
                Import roles and create telegram based bounties
              </h3>
            </div>
          </div>

          <button className="w-[107px] h-[34px] rounded-lg border border-white flex justify-center items-center text-white font-normal text-sm">
            Connect
          </button>
        </div>

        <div className="w-full h-[80px] px-[37px] flex justify-between items-center">
          <div className="flex gap-6">
            <div className="bg-[#1D1D1D] h-[46px] w-[46px] flex justify-center items-center rounded-[10px]">
              <FaEthereum size={24} />
            </div>

            <div>
              <h1 className="font-semibold text-base text-white">Wallet</h1>
              <h3 className="font-normal text-sm text-[#A6A6A6]">
                Import roles and create wallet based bounties
              </h3>
            </div>
          </div>

          <button className="w-[107px] h-[34px] rounded-lg border border-white flex justify-center items-center text-black border-[#FFFFFF] font-normal text-sm bg-white">
            Connected
          </button>
        </div>
      </div>
    </form>
  );
};

export default IntegrationsSettingPage;