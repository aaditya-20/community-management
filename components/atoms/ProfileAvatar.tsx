import { ReactElement } from 'react';

type ProfileIconProps = {
  imageUrl: string;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
};


// Component for rendering a circular profile icon with an image
const ProfileIcon = ({ imageUrl, size = 32, className = '', style, alt = 'Profile Image' }: ProfileIconProps): ReactElement => {
  const sizeStyle = typeof size === 'number' ? { width: size, height: size } : { width: size };
  return (
    <div
      className={`relative inline-block rounded-full overflow-hidden ${className}`}
      style={{ ...sizeStyle, ...style }}
    >
      <img src={imageUrl} alt={alt} className="object-cover w-full h-full" />
    </div>
  );
};

export default ProfileIcon;
