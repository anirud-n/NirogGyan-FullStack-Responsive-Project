import "./index.css";
const Header = (props) => {
  const { patientName, dateOfBirth, dateOfIssue, medicationsList } = props;
  return (
    <>
      <h1 className="medication-text">MEDICATIONS</h1>
      <div className="border-container">
        <div className="profile-container">
          <div className="heading-container">
            <img
              src="https://res.cloudinary.com/ds1vobcwe/image/upload/v1689357862/pill-capsule_k246ug.png"
              className="medicine-logo"
            />
            <h1 className="active-medicine-text">
              Active Medications ({medicationsList.length})
            </h1>
          </div>

          <div className="profile-items">
            <p className="patient-profile-questions">PATIENT NAME</p>
            <p className="patient-profile-answers">{patientName}</p>
          </div>
          <div className="profile-items">
            <p className="patient-profile-questions">DATE OF BIRTH</p>
            <p className="patient-profile-answers">{dateOfBirth}</p>
          </div>
          <div className="profile-items">
            <p className="patient-profile-questions">DATE OF ISSUE</p>
            <p className="patient-profile-answers">{dateOfIssue}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
