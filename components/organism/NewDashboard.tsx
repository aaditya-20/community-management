import Sidebar from "../molecules/Sidebar";
import Header from "../atoms/Header";
import CommunityHealth from "../molecules/CommunityHealth";
import Mission from "../molecules/MissionCard";
import AnalyticsCardMainDashboard from "../molecules/AnalyticsCardMainDashboard";
import RecentlyJoinedCardDashboardScreen from "../molecules/RecentlyJoinedCardDashboardScreen";
import OnboardingExperienceCard from "../molecules/OnboardingExperienceCard";


const cards = [
  {
    title: "Get to know the platform",
    description: "See what you will be able to do with Platform",
    buttonText: "Play Video",
  },
  {
    title: "Create a mission",
    description: "Create a bounty to earn XP.",
    buttonText: "Create Mission",
  },
  {
    title: "Create a platform",
    description: "Create a form to earn XP",
    buttonText: "Create form",
  },
];

const NewDashboard = () => {
  return (
    <div className=" bg-gray-900 h-[870px]">
      <Header />
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="flex-0 flex flex-col">
          <div className="bg-gray-900 py-4 px-6">
            <h2 className="text-white text-2xl font-bold absolute left-[285px] top-[80px] mb-2">
              Satoshi Space
            </h2>
            <div className="text-gray-400 text-medium absolute left-[285px] top-[110px]">
              Here what happening with your community
            </div>
          </div>
          <div className="bg-gray-900 py-0 px-0 flex flex-col flex-0">
            <div className="flex flex-1 ">
              <div className=" w-3/4 bg-gray-900  rounded-lg p-6 flex flex-col space-y-4">
                <div className="absolute left-[240px] top-[150px] width-[500px] h-[1020px]">
                  <AnalyticsCardMainDashboard />
                </div>
                <div className="absolute left-[-95px] top-[40px]">
                  <Mission contributors="50" submission="150"/>

                  <div className = "absolute left-[390px] top-[499px] ">
                    <RecentlyJoinedCardDashboardScreen />
                  </div>
                </div>
              </div>
              <div className="w-1/4 flex flex-col space-y-4">
                <div className="bg-gray-900 shadow-md rounded-lg p-6 absolute left-[-5px] top-[-90px] h-[15px]">
                  <CommunityHealth Twitter="30"  Total="59.5K"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="absolute left-[1210px] top-[80px] text-white text-xl font-bold">
          Onboarding Experience
        </h1>
        <div className="absolute left-[1200px] top-[156px] text-gray-400">
          {cards.map((card, index) => (
            <OnboardingExperienceCard
              key={index}
              title={card.title}
              label={card.description}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;
