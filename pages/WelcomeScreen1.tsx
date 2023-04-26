import { useRouter } from 'next/router';
import { useEffect } from 'react';

const name="Ash-KODES"

const WelcomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/WelcomeScreen1A');
    }, 5000); // delay for 3 seconds

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="bg-[#161B21] flex flex-col h-screen items-center justify-center">
     
      <p className="font-generalsans font-extralight text-base md:text-lg lg:text-5xl leading-normal text-center text-white">
        Hello,{name}
      </p>
    </div>
  );
};

export default WelcomePage

