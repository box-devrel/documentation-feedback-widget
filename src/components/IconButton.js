import { h } from "preact";

// Material UI
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import Icon from "preact-material-components/Icon";
import "preact-material-components/Icon/style.css";

// Custom styling
import style from "../styles/IconButton.scss";

// Custom modules
import ThumbIcon from "./ThumbIcon";

const IconButton = ({ positive, loading, onClick, response }) => {
  let selected = response === positive;
  let className = positive ? "" : (selected ? " mdc-theme--secondary-bg" : " mdc-theme--secondary");

  return (
    <Button
      class={style.this.concat(className)}
      positive={positive}
      negative={!positive}
      outlined={!selected}
      raised={selected}
      onClick={onClick}>
      {response === positive && loading ? (
        <Icon class={style.rotating}>loop</Icon>
      ) : (
        <ThumbIcon {...{positive}} />
      )}
    </Button>
  );
};

export default IconButton;