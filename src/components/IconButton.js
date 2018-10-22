import { createElement } from "react";

import Button from "@material-ui/core/Button";
import LoopIcon from "@material-ui/icons/Loop";
import ThumbIcon from "./ThumbIcon";

import { rotating, outlined } from "../styles/Icon.scss";


const IconButton = ({ positive, loading, onClick, response }) => {
  let selected = response === positive;
  let className = response != null && !selected ? outlined : "";
  
  return (
    <Button
      variant="fab" 
      color={ positive ? "primary" : "secondary" }
      aria-label={ positive ? "Yes" : "No" } 
      className={className}
      onClick={onClick}>
      {response === positive && loading ? (
        <LoopIcon className={rotating} />
      ) : (
        <ThumbIcon {...{ positive }} />
      )}
    </Button>
  );
};

export default IconButton;