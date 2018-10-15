import { h } from "preact";

const FormPrompt = ({ show, className, onClick }) => (
  <div>
    {show === true && (
      <div className={className}>
        Thank you!
        <a onClick={onClick}>Give us some feedback.</a>
      </div>
    )}
  </div>
);

export default FormPrompt;