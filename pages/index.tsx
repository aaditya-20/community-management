import { FaDiscord, FaTwitter } from 'react-icons/fa';
import IconButton from '../components/atoms/IconButton';
import { ReactElement } from 'react';

const HomePage = (): ReactElement => {
  const handleDiscordClick = () => {
    // handle Discord button click
  };

  const handleTwitterClick = () => {
    // handle Twitter button click
  };

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <IconButton icon={FaDiscord} label="Join " className="bg-indigo-600" onClick={handleDiscordClick} />
      {/* <IconButton icon={FaTwitter} label="Follow us on Twitter" className="bg-blue-500" onClick={handleTwitterClick} /> */}
    </div>
  );
};

export default HomePage;
