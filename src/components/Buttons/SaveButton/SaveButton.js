import { BsBookmark } from "react-icons/bs";
import "./SaveButton.scss";

const SaveButton = () => {
  return (
    <button className="button-gray flex space-between align-center">
      <BsBookmark className="save-icon" />{" "}
      <span className="ml-10">Save To Recipe Box</span>
    </button>
  );
};

export default SaveButton;
