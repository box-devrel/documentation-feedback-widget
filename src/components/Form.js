import { h } from "preact";

import Button from "preact-material-components/Button";
import TextField from "preact-material-components/TextField";
import Typography from "preact-material-components/Typography";
import LinearProgress from "preact-material-components/LinearProgress";
import "preact-material-components/Button/style.css";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Typography/style.css";
import "preact-material-components/LinearProgress/style.css";

const Form = ({
  name,
  email,
  message,
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
        outlined
        label="Name (optional)"
        autofocus
        disabled={disabled}
        type="text"
      />
    </div>
    <div className={className}>
      <TextField
        value={email}
        onInput={onInput("email")}
        outlined
        label="Email (optional)"
        disabled={disabled}
        type="email"
      />
    </div>
    <div className={className}>
      <TextField
        value={message}
        onInput={onInput("message")}
        textarea={true}
        label="How could we improve it? (optional)"
        disabled={disabled}
      />
    </div>
    <div className={className}>
      <Button unelevated disabled={disabled}>Send Feedback</Button>
    </div>
    <div className={className}>
      <LinearProgress indeterminate={disabled} />
    </div>
    <div className={className}>
      <Typography caption>
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