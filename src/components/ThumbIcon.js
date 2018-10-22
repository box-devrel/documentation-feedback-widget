import { createElement, Fragment } from "react";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const ThumbsIcon = ({ positive }) => (
  <Fragment>
    {
      positive ? (
        <ThumbUpIcon />
      ) : (
        <ThumbDownIcon />
      )
    }
  </Fragment>
);

export default ThumbsIcon;