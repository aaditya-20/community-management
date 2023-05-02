declare var window: any;
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import StoreData from '@/utils/StoreData';
// import {obj} from '@/utils/StoreData';


// const name = obj.name;
if (typeof window !== "undefined"){
const storedJsonData = localStorage.getItem('data');
console.log(storedJsonData)
const jsonData = JSON.parse(storedJsonData ?? '{}');
console.log(jsonData)
}

const WelcomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/WelcomeScreen1A');
    }, 3000); // delay for 3 seconds

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="bg-[#161B21] flex flex-col h-screen items-center justify-center">
     
      <p className="font-generalsans font-extralight text-base md:text-lg lg:text-5xl leading-normal text-center text-white">
        Hello
      </p>
    </div>
  );
};

export default WelcomePage

