import { ReactElement, ReactNode } from 'react';
import { IconType } from 'react-icons';
// import IconType from "react-icons";

type IconButtonProps = {
  icon: IconType;
  label: string;
  className?: string;
  classNameIcon: string;
  onClick?: () => void;
  children?: ReactNode;
};
// while importing dont forget to add props 
const IconButton = ({ icon: Icon, label, className = '', onClick, classNameIcon='', children, ...props }: IconButtonProps): ReactElement => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 font-medium text-white   ${className}`}
      onClick={onClick}
      {...props}
    >
      <Icon className={`text-2xl ${classNameIcon}`} />
      <span>{label}</span>
      {children}
    </button>
  );
};

export default IconButton;
