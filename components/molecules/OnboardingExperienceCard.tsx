const OnboardingExperienceCard = (props: any) => {
  return (
    <div className={`rounded-[20px] bg-[#232A35] w-[256px] h-[161px] mb-4 py-[23px] pl-[18px] pr-[25px] ${props.style}`}>
      <div className="h-full w-full">
        <h1 className="text-white font-semibold text-[16px] leading-[21.6px] mb-1">{props.title}</h1>
        <p className="font-normal text-[14px] leading-[18.9px] mb-[17px] h-[38px] w-[213px] overflow-hidden text-ellipsis">{props.label}</p>
        <div className="card-actions ">
          <button className=" w-auto h-[34px] flex justify-center items-center border border-[#FFFFFFB2] rounded-lg px-3 py-2" onClick={props.handleClick}>
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingExperienceCard;
