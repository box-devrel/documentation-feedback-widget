import { createElement, Fragment } from "react";

import IconButton from "./IconButton";
import { row } from "../styles/Widget.scss";

let IconButtons = ({ submitted, loading, response, onClick }) => (
  <Fragment>
    {submitted !== true && (
      <div className={row}>
        <IconButton
          positive={true}
          loading={loading}
          response={response}
          onClick={onClick(true)}
        />

        <IconButton
          positive={false}
          loading={loading}
          response={response}
          onClick={onClick(false)}
        />
      </div>
    )}
  </Fragment>
);

export default IconButtons;