import { createElement } from "react";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

const Form = ({
  name,
  email,
  note,
  onInput,
  className,
  onSubmit,
  disabled
}) => (
  <form onSubmit={onSubmit}>
    <div className={className}>
      <TextField
        value={name}
        onInput={onInput("name")}
        variant="outlined"
        label="Name (optional)"
        autoFocus
        disabled={disabled}
        type="text"
      />
    </div>
    <div className={className}>
      <TextField
        value={email}
        onInput={onInput("email")}
        variant="outlined"
        label="Email (optional)"
        disabled={disabled}
        type="email"
      />
    </div>
    <div className={className}>
      <TextField
        value={note}
        onInput={onInput("note")}
        multiline={true}
        label="How could we improve it?"
        disabled={disabled}
        required={true}
        variant="outlined"
        fullWidth={true}
        rows={4}
      />
    </div>
    <div className={className}>
      <Button variant="contained" color="primary" disabled={disabled} type="submit">
        Send Feedback
      </Button>
    </div>
    <div className={className}>
      <LinearProgress variant={ disabled ? "indeterminate" : "determinate" } value={0} />
    </div>
    <div className={className}>
      <Typography variant="caption">
        Your data will be treated in accordance with our
        <a href="https://account.box.com/legal_text/privacy_policy">
          Privacy Policy
        </a>
        , which sets out the rights you have in respect of your data.
      </Typography>
    </div>
  </form>
);

export default Form;




