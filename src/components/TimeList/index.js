import "./index.css";

const TimeList = (props) => {
  const { times } = props;
  return (
    <li className="each-time">
      <p className="timeing">{times}</p>
    </li>
  );
};

export default TimeList;
