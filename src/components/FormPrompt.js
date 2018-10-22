import { createElement } from "react";
import Typography from "@material-ui/core/Typography";

const FormPrompt = ({ className, onClick }) => (
  <Typography variant="body1">
    <div className={className}>
      Thank you!
      <a onClick={onClick}>Would you like to tell us more?</a>
    </div>
  </Typography>
);

export default FormPrompt;