import React from "react";
import Sidebar from "../components/molecules/Sidebar";
import Header from "../components/atoms/Header";
import MemberGrowthCardAnalyticsScreen from "../components/molecules/MemberGrowthCardAnalyticsScreen";
import SocialStatsCard from "../components/molecules/SocialStatsCard";
import NewMemberCardAnalyticScreen from "../components/molecules/NewMemberCardAnalyticScreen";
import UserBaseAnalytics from "../components/molecules/UserBaseAnalytics";
import TopContributorCardLeaderboardScreen from "../components/molecules/TopContributorCardLeaderboardScreen";
import TopContentCard from "../components/molecules/TopContentCard";
import RouteGuardAdmin from "@/utils/RouteGuardAdmin";
import TopContributorAnalyticsScreen from "@/components/molecules/TopContributorAnalyticsScreen";
const users = [
  {
    key: 1,
    userid: "andrebiachi",
    username: "Esther Howard",
    time: 23,
    tag: "#YGPZ",
    profileUrl: "Icons/Twitter.svg",
    discription:
      "The real golden treasure is your inner peace Like! Hale if you agree",
  },
  {
    key: 2,
    userid: "andrebiachi",
    username: "Esther Howard",
    time: 23,
    tag: "#YGPZ",
    profileUrl: "Icons/Twitter.svg",
    discription:
      "The real golden treasure is your inner peace Like! Hale if you agree",
  },
  {
    key: 3,
    userid: "andrebiachi",
    username: "Esther Howard",
    time: 23,
    tag: "#YGPZ",
    profileUrl: "Icons/Twitter.svg",
    discription:
      "The real golden treasure is your inner peace Like! Hale if you agree",
  },
];

const AnalyticsScreen = () => {
  return (
    <div className="min-h-screen min-w-fit bg-[#171C23] flex scrollbar-hide">
      <Sidebar />
      <div className="w-full h-full">
        <Header />

        <div className=" w-full flex justify-center items-center">
          <div className="mt-[5px] p-6">
            <h1 className="font-semibold text-[24px] leading-[32.4px] text-white mb-2">
              Analytics
            </h1>
            <p className="font-normal text-[#A6A6A6] text-[16px] leading-[21.6px] mb-6">
              Here’s what’s happening with your community
            </p>

            <div className="flex">
              {/* Left Section */}
              <div>
                <div className="flex  gap-[26px] mb-[26px]">
                  <UserBaseAnalytics
                    imageUrl="Icons/twitter.svg"
                    height={16.25}
                    width={20}
                    title="New Twitter users"
                    count={632}
                    percentage={1.29}
                    bgColor="#64CFF6"
                  />
                  <UserBaseAnalytics
                    imageUrl="Icons/Discord.svg"
                    height={14.78}
                    width={20}
                    title="New Discord users"
                    count={632}
                    percentage={1.29}
                    bgColor="#6359E9"
                  />
                </div>

                {/* Member growth section */}
                <div className="mb-[26px] relative filter blur-sm">
                  <MemberGrowthCardAnalyticsScreen />
                </div>

                {/* New Members section */}
                <div>
                  <NewMemberCardAnalyticScreen />
                </div>
              </div>
              {/* Right Section */}
              <div className=" flex flex-col gap-[26px] ">
                <div className="w-[505px] h-[433px] bg-[#232B35] rounded-[20px]  overflow-hidden ml-[13px]">
                  <TopContributorAnalyticsScreen />
                </div>
                <div className="h-[449px] w-[503px] overflow-hidden rounded-[20px] bg-[#232B35] p-6 ml-[28px]">
                  <div className="h-full w-full blur">
                    <div className="flex justify-between items-center mb-[30px]">
                      <h1 className="text-white font-medium text-[24px] leading-[32.4px]">
                        Top content
                      </h1>

                      <button className="text-[#D9D9D9] font-normal text-[15px] leading-[20.25px]">
                        Show all
                      </button>
                    </div>

                    <div>
                      {users.map((item) => {
                        return (
                          <div key={item.key} className="mb-4">
                            <TopContentCard
                              discription={item.discription}
                              profileUrl={item.profileUrl}
                              userid={item.userid}
                              time={item.time}
                              username={item.username}
                              tag={item.tag}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteGuardAdmin(AnalyticsScreen);
