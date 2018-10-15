import { h } from "preact";

// Material UI components
import Button from "preact-material-components/Button";
import TextField from "preact-material-components/TextField";
import Typography from "preact-material-components/Typography";
import "preact-material-components/Button/style.css";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Theme/style.css";

const Form = ({ className, onSubmit }) => (
  <div>
    <div className={className}>
      <TextField outlined label="Name (optional)" autofocus type='text' />
    </div>
    <div className={className}>
      <TextField outlined label="Email (optional)" type='email' />
    </div>
    <div className={className}>
      <TextField textarea={true} label="How could we improve it? (optional)" />
    </div>
    <div className={className}>
      <Button unelevated onClick={onSubmit}>Send Feedback</Button>
    </div>
    <hr />
    <div className={className}>
      <Typography caption>
        Your data will be treated in accordance with our
        <a href="https://account.box.com/legal_text/privacy_policy">Privacy Policy</a>,
        which sets out the rights you have in respect of your data.
      </Typography>
    </div>
  </div>
);

export default Form;