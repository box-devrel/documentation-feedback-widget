import { h } from "preact";

// Material UI
import Typography from "preact-material-components/Typography";
import "preact-material-components/Typography/style.css";

const ThankYouNote = ({ submitted, className }) => (
  <div>
    { submitted === true && (
      <div className={className}>
        <Typography body1>
          Thank you for your feedback.
        </Typography>
      </div>
    )}  
  </div>
);

export default ThankYouNote;