import { createElement, Fragment } from "react";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const ThumbsIcon = ({ positive }) => (
  <Fragment>
    {
      positive ? (
        <ThumbUpIcon fontSize='small' />
      ) : (
        <ThumbDownIcon fontSize='small' />
      )
    }
  </Fragment>
);

export default ThumbsIcon;