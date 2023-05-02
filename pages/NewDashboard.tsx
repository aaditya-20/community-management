import Sidebar from "../components/molecules/Sidebar";
import Header from "../components/atoms/Header";
import CommunityHealth from "../components/molecules/CommunityHealth";
import Mission from "../components/molecules/MissionCard";
import AnalyticsCardMainDashboard from "../components/molecules/AnalyticsCardMainDashboard";
import RecentlyJoinedCardDashboardScreen from "../components/molecules/RecentlyJoinedCardDashboardScreen";
import OnboardingExperienceCard from "../components/molecules/OnboardingExperienceCard";


declare var window: any;
var name = "user";
if (typeof window !== "undefined") {
  const storedJsonData = localStorage.getItem("data");
  // console.log(storedJsonData)
  const jsonData = JSON.parse(storedJsonData ?? "{}");
  if(jsonData.name)
   name = jsonData.name;
   
  console.log("->",jsonData);
  
}


const cards = [
  {
    key: 1,
    title: "Get to know the platform",
    description: "See what you will be able to do with Platform",
    buttonText: "Play Video",
  },
  {
    key: 2,
    title: "Create a mission",
    description: "Create a bounty to earn XP.",
    buttonText: "Create Mission",
  },
  {
    key: 3,
    title: "Create a platform",
    description: "Create a form to earn XP",
    buttonText: "Create form",
  },
];

const NewDashboard = () => {
  return (
    <div className="min-h-screen bg-[#171C23] flex">
      <Sidebar />
      <div className="h-full w-full">
        <Header />
        {/* Main Section */}
        <div className="h-full w-full  flex justify-between">
          {/* Left Section */}
          <div className="min-h-screen w-full px-6 pt-[29px] flex justify-center items-center">
            <div>
              <div className="h-full w-full">
                <h2 className="text-white text-2xl font-semibold mb-2">
                  {name} Space
                </h2>
                {/* Main Section */}
                <div className="flex gap-6">
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
                  <div>
                    <div className="h-[315px] w-[469px] bg-[#232A35] rounded-[20px] flex items-end mb-5">
                      <Mission contributors="50" submission="150" />
                    </div>
                    <CommunityHealth Twitter="30" Total="59.5K" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-[304px] min-h-screen px-6 border-l border-[#333840]">
            <h1 className="text-white font-semibold text-[22px] leading-[29.6px] mt-[29px] mb-[55px]">
              Onboarding Experience
            </h1>

            {/* Cards */}
            {cards.map((card, index) => {
              return (
                <div key={card.key}>
                  <OnboardingExperienceCard
                    key={index}
                    title={card.title}
                    label={card.description}
                    buttonText={card.buttonText}
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

export default NewDashboard;
