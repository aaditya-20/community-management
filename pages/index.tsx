import CommunitySetupScreen from "@/components/organism/CommunitySetupScreen";
import IconButton from "@/components/atoms/IconButton";
import BackGroundPage from "@/components/molecules/BackGroundPage";
import { FaDiscord, FaTwitter } from 'react-icons/fa';
const HomePage = () => {
  const handleDiscordClick = () => {
    // handle Discord button click
  };

  return (
    <>
      {/* <BackGroundPage/> */}
      <CommunitySetupScreen/>
     
    </>
  );
};

export default HomePage;
