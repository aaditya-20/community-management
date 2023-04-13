import { FaHome, FaUserAlt, FaCog } from "react-icons/fa";
const OnboardingExperienceCard = (props:any) => {
  return (
    <div className={props.style}>
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>{props.label}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={props.handleClick}>Buy Now</button>
    </div>
  </div>
</div>
  )
  }
export default OnboardingExperienceCard