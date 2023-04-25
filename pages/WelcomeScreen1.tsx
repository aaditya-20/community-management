const name = "Andrew Bate";

export const WelcomePage = () => {
  return (
    <div className="bg-[#161B21] flex flex-col h-screen items-center justify-center">
     
      <p className="font-generalsans font-extralight text-base md:text-lg lg:text-5xl leading-normal text-center text-white">
        Hello, {name}
      </p>
    </div>
  );
};
