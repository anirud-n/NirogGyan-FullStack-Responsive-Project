import { v4 as uuidv4 } from "uuid";
import "./index.css";
import TimeList from "../TimeList";
import TimeIndicatorImages from "../TimeIndicatorImages";
import SideEffects from "../SideEffects";
import MakeNumbersBold from "../MakeNumbersBold";

const GenerateMedicineCards = (props) => {
  const { eachObject } = props;
  const {
    medicineName,
    sideAImage,
    sideBImage,
    reasonForMedication,
    directionToUse,
    detailedInstruction,
    timingsForMedicine,
    possibleSideEffects,
    criticalSituation,
  } = eachObject;

  

  let isMedicalHelpRequired = true;
  if (criticalSituation === null) {
    isMedicalHelpRequired = false;
  }

  let displayOneImage = false;

  if (sideBImage === null) {
    displayOneImage = true;
  }

  let imageContainer;
  if (displayOneImage === true) {
    imageContainer = (
      <div>
        <h1 className="heading-text">APPEARANCE</h1>
        <div className="single-images-cont">
          <img
            src={sideAImage}
            className="single-medicine-side-image"
            alt="medicine"
          />
        </div>
      </div>
    );
  } else {
    imageContainer = (
      <div className="side-a-b-images-cont">
        <div className="each-side-image-cont">
          <h1 className="heading-text">SIDE A</h1>
          <img
            src={sideAImage}
            className="medicine-side-image"
            alt="medicine"
          />
        </div>

        <div className="each-side-image-cont">
          <h1 className="heading-text">SIDE B</h1>
          <img
            src={sideBImage}
            className="medicine-side-image"
            alt="medicine"
          />
        </div>
      </div>
    );
  }

  const isInstructionPresent = detailedInstruction !== "";
  const { time, image } = timingsForMedicine;
  const timeArray = time.split(",");

  let extraStyle = "";
  if (timeArray[0] === "Bedtime") {
    extraStyle = "move-to-last";
  }

  return (
    <li className="each-medicine-list">
      <h1 className="medicine-name">{medicineName}</h1>
      <div className="main-container">
        <div className="container-1">
          {imageContainer}

          <div className="reason-container">
            <h1 className="heading-text">REASON FOR MEDICATION</h1>
            <p className="reason-text">{reasonForMedication}</p>
          </div>
        </div>

        <div className="directions-container">
          <div>
            <h1 className="heading-text">DIRECTIONS / NOTES</h1>
            <div className="direction-heading-container">
              <p className="direction-detail" id="direction-to-use">
                <MakeNumbersBold directionToUse={directionToUse}/>
              </p>
              {isInstructionPresent && (
                <p className="instaruction-detail">{detailedInstruction}</p>
              )}
            </div>
          </div>
          <div className="time-bar-container">
            <ul className={`time-showing-images-container ${extraStyle}`}>
              {timeArray.map((eachObject) => (
                <TimeIndicatorImages
                  image={image}
                  time={timeArray[0]}
                  key={uuidv4()}
                />
              ))}
            </ul>
            <div>
              <div className="medicine-timings-container">
                <div className="sun-image-container">
                  <img
                    src="https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357980/sun_iiruxw.png"
                    className="sun-image"
                    alt="sun"
                  />
                </div>
                <ul className={`timing-container ${extraStyle}`}>
                  {timeArray.map((eachTime) => (
                    <TimeList times={eachTime} key={uuidv4()} />
                  ))}
                </ul>
                <div className="moon-image-container">
                  <img
                    src="https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357980/moon_ebooy2.png"
                    className="moon-image"
                    alt="moon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="side-effects-container">
          <h1 className="heading-text">POSSIBLE SIDE EFFECTS</h1>
          <ul className="side-effects-list-cont">
            {possibleSideEffects.map((eachObj) => (
              <SideEffects eachObj={eachObj} key={eachObj.sideEffect} />
            ))}
          </ul>

          {isMedicalHelpRequired && (
            <div>
              <h1 className="heading-text">GET MEDICAL HELP IF</h1>
              <p className="critical-situations">{criticalSituation}</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default GenerateMedicineCards;
