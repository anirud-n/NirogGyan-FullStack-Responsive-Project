import "./index.css";

const TimeIndicatorImages = (props) => {
  const { image, time } = props;
  let extraStyle=""
  if(time==="Bedtime"){
    extraStyle="no-margin"
  }
  return (
    <li className="each-image-cont">
      <img src={image} className={`image-style ${extraStyle}`} alt="medicine-time" />
      <hr className="vertical-line" />
    </li>
  );
};

export default TimeIndicatorImages;
