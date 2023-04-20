import { useState } from 'react';

function ShowNotifications() {
  const [showMessages, setShowMessages] = useState(false);
  const[unread,setUnread] =useState(5)
  
   // Example data variable

   

  const handleClick = () => {
    setShowMessages(!showMessages);
    setUnread(0);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center focus:outline-none"
        onClick={handleClick}
      >
        <img
          src="/icons/vector.svg"
          alt="My Icon"
          className="h-5 w-5 ml-2 div absolute w-[30px] h-[25px] left-[1290px] top-[26px] bg-[#313131] rounded-[25px] flex items-center justify-center"
        />
        {unread > 0 && (
          <div className="ml-2 div absolute w-2 h-2 rounded-full bg-red-500 left-[1310px] top-[23px]"></div>
        )}
      </button>
      {unread>0 && showMessages && (
        <div className="absolute z-10 w-64 bg-gray-400 shadow-lg rounded-lg py-2 mt-1 left-[1230px] top-[75px]">
          <ul>
            <li>Unread message 1</li>
            <li>Unread message 2</li>
            <li>Unread message 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShowNotifications;