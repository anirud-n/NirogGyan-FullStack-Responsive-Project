import "./index.css";

const MakeNumbersBold = (props) => {
  const { directionToUse } = props;
  const characterArray = Array.from(directionToUse);

  const formattedArray = characterArray.map((char, index) => {
    if (!isNaN(char)) {
      return (
        <span key={index} className="bold">
          {char}
        </span>
      );
    } else {
      return (
        <span key={index} className="normal">
          {char}
        </span>
      );
    }
  });

  return formattedArray;
};

export default MakeNumbersBold;
