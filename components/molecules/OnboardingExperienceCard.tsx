const OnboardingExperienceCard = (props: any) => {
  return (
    <div className={`rounded-2xl bg-[#232A35] w-[300px] h-[155px] mb-3  ${props.style}`}>
      <div className="card-body relative left-[-20px] py-3">
        <h2 className="text-white card-title">{props.title}</h2>
        <p className="text-gray-400">{props.label}</p>
        <div className="card-actions ">
          <button className="border border-gray-400 rounded-lg px-3 py-2" onClick={props.handleClick}>
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingExperienceCard;
