import { h } from "preact";

// Material UI
import Typography from "preact-material-components/Typography";
import "preact-material-components/Typography/style.css";

const Header = ({ className }) => (
  <div className={className}>
    <Typography headline6>
      <strong>Was this documentation helpful?</strong>
    </Typography>
  </div>
);

export default Header;