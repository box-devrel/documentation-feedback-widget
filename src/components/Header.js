import { h } from "preact";

import Typography from "preact-material-components/Typography";
import "preact-material-components/Typography/style.css";

const Header = ({ className, submitted }) => (
  <div>
    { !submitted && (
      <div className={className}>
        <Typography headline6>
          <strong>Is this documentation useful?</strong>
        </Typography>
      </div>
    )}
  </div>
);

export default Header;