import { h } from "preact";

// Material UI
import Typography from "preact-material-components/Typography";
import "preact-material-components/Typography/style.css";

const Header = ({ className, submitted }) => (
  <div>
    { !submitted && (
      <div className={className}>
        <Typography headline6>
          <strong>Was this documentation helpful?</strong>
        </Typography>
      </div>
    )}
  </div>
);

export default Header;