import { h } from "preact";

const FormPrompt = ({ className, onClick }) => (
  <div className={className}>
    Thank you!
    <a onClick={onClick}>Tell us why.</a>
  </div>
);

export default FormPrompt;