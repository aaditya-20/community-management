import Sidebar from "../components/molecules/Sidebar";
import Header from "../components/atoms/Header";
import CommunityHealth from "../components/molecules/CommunityHealth";
import Mission from "../components/molecules/MissionCard";
import AnalyticsCardMainDashboard from "../components/molecules/AnalyticsCardMainDashboard";
import RecentlyJoinedCardDashboardScreen from "../components/molecules/RecentlyJoinedCardDashboardScreen";
import OnboardingExperienceCard from "../components/molecules/OnboardingExperienceCard";
import RouteGuardAdmin from "@/utils/RouteGuardAdmin";
import { useEffect, useState } from "react";
declare var window: any;

const cards = [
  {
    key: 1,
    title: "Get to know the platform",
    description: "See what you will be able to do with Platform",
    buttonText: "Play Video",
    onclick: "",
    flag: "0",
  },
  {
    key: 2,
    title: "Create a mission",
    description: "Create a bounty to earn XP.",
    buttonText: "Create Mission",
    onclick: "/MissionCreationFormPage",
  },
  {
    key: 3,
    title: "Create a platform",
    description: "Create a form to earn XP",
    buttonText: "Create form",
    onclick: "",
    flag: "0",
  },
];

const NewDashboard = () => {
  const [name, setName] = useState("user");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedJsonData = localStorage.getItem("data");
      const jsonData = JSON.parse(storedJsonData ?? "{}");
      if (jsonData != null && jsonData.name) setName(jsonData.name);
    }
  }, [name]);
  return (
    <div className="min-h-screen min-w-fit bg-[#171C23] flex  scrollbar-hide">
      <Sidebar />
      <div className="h-full w-full">
        <Header />
        {/* Main Section */}
        <div className="h-full w-full  flex justify-between">
          {/* Left Section */}
          <div className="h-full w-full px-6 pt-[29px] flex justify-center bg-[#171C23] items-center">
            <div>
              <div className="h-full w-full ">
                <h2 className="text-white text-2xl font-semibold mb-2">
                  {name}’s Space
                </h2>
                <h3 className="font-normal text-base text-[#A6A6A6] mb-6">
                  Here’s what’s happening with your community
                </h3>
                {/* Main Section */}
                <div className="flex flex-wrap gap-6 mb-10">
                  {/* Analytics & Recently Joined Section */}
                  <div className="w-[400px] h-[750px] bg-[#232B35] rounded-[20px] overflow-hidden pt-[29px] ">
                    <div>
                      <AnalyticsCardMainDashboard />
                    </div>
                    <div className="h-auto w-auto">
                      <RecentlyJoinedCardDashboardScreen />
                    </div>
                  </div>

                  {/* Mission & Community Health Section */}
                  <div className="flex flex-col justify-between gap-5">
                    <div className="h-[315px] w-[469px] bg-[#232A35] rounded-[20px] flex items-end">
                      <Mission contributors="50" submission="150" />
                    </div>
                    <div className="relative w-[469px] h-[414px] filter blur-sm">
                      <CommunityHealth Twitter="30" Total="59.5K" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-auto h-auto px-6 border-l bg-[#171C23] border-[#333840]">
            <h1 className="text-white font-semibold text-[22px] leading-[29.6px] mt-[29px] mb-[55px]">
              Onboarding Experience
            </h1>

            {/* Cards */}
            {cards.map((card, index) => {
              return (
                <div  key={card.key} >
                  <OnboardingExperienceCard
                    flag={card.flag}
                    key={index}
                    title={card.title}
                    label={card.description}
                    buttonText={card.buttonText}
                    handleClick={card.onclick}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteGuardAdmin(NewDashboard);
