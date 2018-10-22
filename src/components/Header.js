import { createElement } from "react";
import Typography from "@material-ui/core/Typography";

const Header = ({ className }) => (
  <div className={className}>
    <Typography variant="h6">
      Is this documentation useful?
    </Typography>
  </div>
);

export default Header;