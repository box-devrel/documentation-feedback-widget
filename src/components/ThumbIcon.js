import { createElement } from "react";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const ThumbsIcon = ({ positive }) => (
  <span>
    {
      positive ? (
        <ThumbUpIcon />
      ) : (
        <ThumbDownIcon />
      )
    }
  </span>
);

export default ThumbsIcon;