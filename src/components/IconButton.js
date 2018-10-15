import { h } from "preact";

// Material UI
import Button from "preact-material-components/Button";
import Icon from "preact-material-components/Icon";
import "preact-material-components/Button/style.css";
import "preact-material-components/Icon/style.css";

import ThumbIcon from "./ThumbIcon";

import { rotating } from "../styles/Icon.scss";

const IconButton = ({ positive, loading, onClick, response }) => {
  let selected = response === positive;
  let className = positive ? "" : (selected ? " mdc-theme--secondary-bg" : " mdc-theme--secondary");

  return (
    <Button
      class={className}
      positive={positive}
      negative={!positive}
      outlined={!selected}
      raised={selected}
      onClick={onClick}>
      {response === positive && loading ? (
        <Icon class={rotating}>loop</Icon>
      ) : (
        <ThumbIcon {...{positive}} />
      )}
    </Button>
  );
};

export default IconButton;