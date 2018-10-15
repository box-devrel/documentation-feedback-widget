import { h } from "preact";

const FormPrompt = ({ className, onClick }) => (
  <div className={className}>
    Thank you!
    <a onClick={onClick}>Give us some feedback.</a>
  </div>
);

export default FormPrompt;