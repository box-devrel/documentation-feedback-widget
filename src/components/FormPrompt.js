import { createElement } from "react";

const FormPrompt = ({ className, onClick }) => (
  <div className={className}>
    Thank you!
    <a onClick={onClick}>Would you like to tell us more?</a>
  </div>
);

export default FormPrompt;