import { createElement } from "react";
import Typography from "@material-ui/core/Typography";

const ThankYouNote = ({ className }) => (
  <div className={className}>
    <Typography variant='body1'>Thank you for your feedback.</Typography>
  </div>
);

export default ThankYouNote;