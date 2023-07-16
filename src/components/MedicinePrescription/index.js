import { Component } from "react";
import Header from "../Header";
import { RotatingLines } from "react-loader-spinner";
import GenerateMedicineCards from "../GenerateMedicineCards";
import "./index.css";

/*This is the JSON data that is fethed from the API :-


{
  patientName: "Joyneel Acharya",
  dateOfBirth: "16 May 1991",
  dateOfIssue: "30 Nov 2020",
  medicationsList: [
    {
      id: 1,
      medicineName: "IBUPROFEN 600MG TAB",
      sideAImage:
        "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357932/IMG_20230714_232103-removebg-preview_iqonqm.png",
      sideBImage:
        "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357946/IMG_20230714_232110-removebg-preview_okfyc1.png",
      reasonForMedication: "For treatment of lower back pain.",
      directionToUse: "1 tablet by mouth 4 times a day with food every 4 hours",
      detailedInstruction: null,
      timingsForMedicine: {
        time: "8:00AM,12:00PM,4:00PM,8:00PM",
        image:
          "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689447079/IMG_20230716_002102_aluiqz.png",
      },
      possibleSideEffects: [
        {
          iconImage:
            "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357978/Screenshot_2023_0714_232238-removebg-preview_kcrcey.png",
          sideEffect: "Headache",
        },
        {
          iconImage:
            "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357979/Screenshot_2023_0714_232248-removebg-preview_dqtyk4.png",
          sideEffect: "Dizziness",
        },
      ],
      criticalSituation:
        "Experiencing chest pain, shortness of breath, and rapid weight gain.",
    },

    {
      id: 2,
      medicineName: "INSULIN, GLARGINE, HUMAN 100 UNT/ML INJ",
      sideAImage:
        "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689417278/Screenshot_2023_0715_160234-removebg-preview_ktfmru.png",
      sideBImage: null,
      reasonForMedication: "Reduce blood pressure.",
      directionToUse: "1 injection at bedtime",
      detailedInstruction:
        "Inject 10 ml vial under the skin as directed for 28 days inject 25 units under the skin at bedtime do not mix with other insulins/discard open vials after 28 days.",
      timingsForMedicine: {
        time: "Bedtime",
        image:
          "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689446975/Screenshot_2023_0716_001805-removebg-preview_uujj7c.png",
      },
      possibleSideEffects: [
        {
          iconImage:
            "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357978/Screenshot_2023_0714_232238-removebg-preview_kcrcey.png",
          sideEffect: "Headache",
        },
        {
          iconImage:
            "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357979/Screenshot_2023_0714_232306-removebg-preview_q0hcow.png",
          sideEffect: "Fatigue",
        },
        {
          iconImage:
            "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357979/Screenshot_2023_0714_232315-removebg-preview_gux3ru.png",
          sideEffect: "Nausea",
        },
      ],
      criticalSituation:
        "Experiencing itching skin, wheezing, and fast heart rate.",
    },

    {
      id: 3,
      medicineName: "TERAZOSIN HCL 2MG CAPSULE",
      sideAImage:
        "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357895/IMG_20230714_231924-removebg-preview_vujckz.png",
      sideBImage:
        "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357917/IMG_20230714_231930-removebg-preview_bctqp7.png",
      reasonForMedication: "For treatment of symptoms of an enlarged prostate.",
      directionToUse: "3 capsules before bed",
      detailedInstruction: null,
      timingsForMedicine: {
        time: "Bedtime",
        image:
          "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689442981/IMG_20230715_231055-removebg-preview_r4vphn.png",
      },
      possibleSideEffects: [
        {
          iconImage:
            "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357979/Screenshot_2023_0714_232248-removebg-preview_dqtyk4.png",
          sideEffect: "Dizziness",
        },
        {
          iconImage:
            "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357978/Screenshot_2023_0714_232238-removebg-preview_kcrcey.png",
          sideEffect: "Headache",
        },
        {
          iconImage:
            "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357980/Screenshot_2023_0714_232338-removebg-preview_in23m0.png",
          sideEffect: "Constipation",
        },
        {
          iconImage:
            "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357979/Screenshot_2023_0714_232343-removebg-preview_gi2fku.png",
          sideEffect: "Loss of appetite",
        },
        {
          iconImage:
            "https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357979/Screenshot_2023_0714_232306-removebg-preview_q0hcow.png",
          sideEffect: "Fatigue",
        },
      ],
      criticalSituation: null,
    },
  ],
};*/

class MedicinePrescription extends Component {
  state = {
    jsonObject: { medicationsList: [] },
    isLoading: true,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await fetch(
        "https://niroggyan-patient-data.onrender.com"
      );
      const data = await response.json();
      this.setState({
        jsonObject: data,
        isLoading: false,
      });
    } catch (err) {
      console.log("Data fetching failed");
      this.setState({
        jsonObject: { medicationsList: [] },
      });
    }
  };

  render() {
    const { jsonObject, isLoading } = this.state;
    const { patientName, dateOfBirth, dateOfIssue, medicationsList } =
      jsonObject;
    return (
      <div className="bg-container">
        <Header
          patientName={patientName}
          dateOfBirth={dateOfBirth}
          dateOfIssue={dateOfIssue}
          medicationsList={medicationsList}
        />

        <div>
          {isLoading ? (
            <div className="loader-spinner">
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="5%"
                visible={true}
              />
            </div>
          ) : (
            <ul className="medicines-list-cont">
              {medicationsList.map((eachObj) => (
                <GenerateMedicineCards eachObject={eachObj} key={eachObj.id} />
              ))}
            </ul>
          )}
        </div>

        <div className="footer">
          <p className="footer-text">
            <span className="span-text">MEDICATIONS: </span>ACTIVE MEDICATIONS
          </p>
        </div>
      </div>
    );
  }
}

export default MedicinePrescription;
