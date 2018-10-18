import { createElement } from "react";

import Button from "@material-ui/core/Button";
import LoopIcon from "@material-ui/icons/Loop";

import ThumbIcon from "./ThumbIcon";
import { rotating, outlined } from "../styles/Icon.scss";

const IconButton = ({ positive, loading, onClick, response }) => {
  let selected = response === positive;
  let className = response != null && !selected ? outlined : "";
  // className += (positive ? ` ${positiveButton}` : ` ${negativeButton}`);
  // console.log(className); //eslint-disable-line
  
  return (
    <Button
      variant="fab" 
      color={ positive ? "primary" : "secondary" }
      aria-label="Add"  
      className={className}
      onClick={onClick}>
      {response === positive && loading ? (
        <LoopIcon className={rotating} />
      ) : (
        <ThumbIcon {...{positive}} />
      )}
    </Button>
  );
};

export default IconButton;