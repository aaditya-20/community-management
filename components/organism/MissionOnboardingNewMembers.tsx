import Sidebar from "../molecules/Sidebar";
import Header from "../atoms/Header";
import NavbarMissionOnboarding from "../molecules/NavbarMissionOnboarding";
import BeAchamp from "../molecules/BeAchamp";
import MissionStepCard from "../molecules/MissionStepCard";

const MissionOnboardingNewMembers = () => {
  return (
    <div className="max-w-screen mx-auto h-screen grid grid-cols-[auto,minmax(0,1fr)] gap-x-[-45px] bg-[#171C23] grid-rows-[71px,auto] md:grid-cols-[auto,1fr] md:left-0">
      <div className="row-span-3 border-r-[1px] border-r-[#353B43]">
        <Sidebar />
      </div>
      <div className="border-b-[1px] border-b-[#353B43]">
        <Header />
      </div>
      <NavbarMissionOnboarding />

      <div className="flex justify-center mt-12">
        <div className="border border-gray-800 relative w-full md:w-[100%] left-[27.5%] transform translate-x-[-40%] transform translate-y-[-7%]">
          <img
            src="/Icons/FrameFire.png"
            alt=""
            className=" ml-0.2 mt-1 max-w-full"
          />
          <div className="p-4">
            <h2 className="text-white text-xl font-bold">
              Onboard 10 new community members
            </h2>
            <p className="text-[#D9D9D9] py-3">
              This bounty is for onboarding 10 new people into Firebond Discord
              community. You’d do that by generating a new invite link (we’re
              not counting past invitations) from our Discord and sharing it
              with people who are genuinely mission aligned.
            </p>
            <ol className="list-decimal list-inside text-[#D9D9D9]">
              <li>
                No prize if it looks like you’re just gaming the system by
                inviting random people who don’t care about Próspera’s mission.
                So be thoughtful about who you invite.
              </li>
              <li>
                {" "}
                When they arrive they should introduce themselves so we
                understand their story. This also helps us know they’re not just
                friends helping someone score a quick bounty.
              </li>
              <li>
                When you reach 10 people, submit your claim and we’ll review.
              </li>
            </ol>
            <p className="text-[#D9D9D9] py-3">
              For those who recruit the right people and help us build out our
              community with high quality participants, this mission can extend
              beyond 20
            </p>
            <MissionStepCard className="border-t" heading1="Onboard 10 new members.................................................................                      " heading2="Submit mission" descp1="Invite new members..........................................................." descp2="Share the proof of work" />
          </div>
        </div>

        <div className="w-full md:w-[50%] flex justify-center items-center transform translate-y-[-40%]">
          <BeAchamp className="w-64 h-64" />
        </div>
      </div>
    </div>
  );
};

export default MissionOnboardingNewMembers;
