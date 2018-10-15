import { h } from "preact";

import Icon from "preact-material-components/Icon";
import "preact-material-components/Icon/style.css";
import Typography from "preact-material-components/Typography";
import "preact-material-components/Typography/style.css";

import { rotating } from "../styles/Icon.scss";

const ThankYouNote = ({ loading, className }) => (
  <div className={className}>
    {loading ? (
      <Icon className={rotating}>refresh</Icon>
    ) : (
      <Typography body1>Thank you for your feedback.</Typography>
    )}
  </div>
);

export default ThankYouNote;