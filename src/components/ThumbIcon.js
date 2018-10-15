import { h } from "preact";

// Material UI
import Icon from "preact-material-components/Icon";
import "preact-material-components/Icon/style.css";

const ThumbsIcon = ({ positive }) => (
  <span>
    {
      positive ? (
        <Icon>thumb_up</Icon>
      ) : (
        <Icon>thumb_down</Icon>
      )
    }
  </span>
);

export default ThumbsIcon;