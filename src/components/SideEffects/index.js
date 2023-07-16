import "./index.css";

const SideEffects = (props) => {
  const { eachObj } = props;
  const { iconImage, sideEffect } = eachObj;
  return (
    <li className="each-side-effect-list">
      <img src={iconImage} className="side-effects-icon" alt={sideEffect} />
      <p className="side-effect-text">{sideEffect}</p>
    </li>
  );
};

export default SideEffects;
