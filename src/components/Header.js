import { createElement } from "react";
import Typography from "@material-ui/core/Typography";

const Header = ({ className }) => (
  <div className={className}>
    <Typography variant="h6">
      Is this documentation useful?
    </Typography>
    <Typography variant="caption">
      Or, <a href='https://box.uservoice.com/' target="_none"> provide us with product feedback</a>
    </Typography>
  </div>
);

export default Header;