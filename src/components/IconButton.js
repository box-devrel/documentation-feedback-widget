import { createElement } from "react";

import Fab from "@material-ui/core/Fab";
import LoopIcon from "@material-ui/icons/Loop";
import ThumbIcon from "./ThumbIcon";

import { rotating, outlined } from "../styles/Icon.scss";

const IconButton = ({ positive, loading, onClick, response }) => {
  let selected = response === positive;
  let className = response != null && !selected ? outlined : "";
  
  return (
    <Fab
      size='small'
      color={ positive ? "primary" : "secondary" }
      aria-label={ positive ? "Yes" : "No" } 
      className={className}
      onClick={onClick}>
      {response === positive && loading ? ( 
        <LoopIcon fontSize='small' className={rotating}/>
      ) : (
        <ThumbIcon {...{ positive }} />
      )}
    </Fab>
  );
};

export default IconButton;