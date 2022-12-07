import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
const ToDoItem = ({ ItemValue }) => {
  const [item, setItem] = useState(ItemValue.completed);
  // const [In, setI] = useState(i);

  return item ? (
    <div className="trueContainer">
      <div
        className="rectangle"
        onClick={() => setItem((prevstat) => !prevstat)}
      >
        <p style={{ textDecoration: "line-through" }}> {ItemValue.title}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
    </div>
  ) : (
    <div className="fcomp" onClick={() => setItem((prevstat) => !prevstat)}>
      <p> {ItemValue.title}</p>
    </div>
  );
};

export default ToDoItem;
