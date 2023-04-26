import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function WelcomeScreen1A() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/NewDashboard');
    }, 5000); // delay for 3 seconds

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="bg-[#161B21] flex flex-col h-screen items-center justify-center">
      <p className="font-generalsans font-light font-mixed text-6xl leading-normal text-center text-white mt-4 mb-2">
        Welcome to{" "}
        <span className="text-[#FE702A] font-generalsans font-normal font-mixed text-6xl leading-normal text-center text-white mt-4 mb-2">
          firebond
        </span>
      </p>
      <p className="font-generalsans font-extralight text-base md:text-lg lg:text-2xl leading-normal text-center text-[#A6A6A6]">
        Scale your Web3 Communities 10X Faster.
      </p>
    </div>
  );
}
