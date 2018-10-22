import { createElement } from "react";
import Typography from "@material-ui/core/Typography";

const FormPrompt = ({ className, onClick }) => (
  <div className={className}>
    <Typography variant="body1">
      Thank you!
      <a onClick={onClick}>Would you like to tell us more?</a>
    </Typography>
  </div>
);

export default FormPrompt;