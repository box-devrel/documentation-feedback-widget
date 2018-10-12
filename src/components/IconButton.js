import { h } from "preact";

import Button from "preact-material-components/Button";
import Icon from "preact-material-components/Icon";

import "preact-material-components/Icon/style.css";

import style from "../styles/icon_button.scss";

function ThumbsButton(props) {
  return (
    <span>
      {
        props.positive ? (
          <Icon>thumb_up</Icon>
        ) : (
          <Icon>thumb_down</Icon>
        )
      }
    </span>
  );
}

export default function IconButton ({ positive, loading, onClick, useful }) {
  let selected = useful === positive;
  let className = positive ? "" : (selected ? " mdc-theme--secondary-bg" : " mdc-theme--secondary");

  return (
    <Button
      class={style.this.concat(className)}
      positive={positive}
      negative={!positive}
      outlined={!selected}
      raised={selected}
      onClick={onClick}>
      {useful === positive && loading ? (
        <Icon class={style.rotating}>loop</Icon>
      ) : (
        <ThumbsButton {...{positive}} />
      )}
    </Button>
  );
}