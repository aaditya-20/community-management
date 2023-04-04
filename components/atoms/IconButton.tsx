import { ReactElement, ReactNode } from 'react';
import { IconType } from 'react-icons';
// import IconType from "react-icons";

type IconButtonProps = {
  icon: IconType;
  label: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};

const IconButton = ({ icon: Icon, label, className = '', onClick, children, ...props }: IconButtonProps): ReactElement => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${className}`}
      onClick={onClick}
      {...props}
    >
      <Icon className="text-2xl" />
      <span>{label}</span>
      {children}
    </button>
  );
};

export default IconButton;
