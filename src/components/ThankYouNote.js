import { h } from "preact";

import Typography from "preact-material-components/Typography";
import "preact-material-components/Typography/style.css";

const ThankYouNote = ({ className }) => (
  <div className={className}>
    <Typography body1>
      Thank you for your feedback.
    </Typography>
  </div>
);

export default ThankYouNote;