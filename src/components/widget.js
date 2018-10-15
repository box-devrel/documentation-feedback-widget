import { h } from "preact";

// Local modules
import Header from "./Header";
import IconButtons from "./IconButtons";
import FormPrompt from "./FormPrompt";
import ThankYouNote from "./ThankYouNote";
import Form from "./Form";

// CSS Styles
import { container, row } from "../styles/Widget.scss";

const Widget = ({
  submitted,
  loading,
  response,
  showForm,
  showFormPrompt,
  setResponse,
  submitForm,
  setShowForm
}) => (
  <div className={container}>
    <Header className={row} />
    <IconButtons
      className={row}
      submitted={submitted}
      loading={loading}
      response={response}
      onClick={setResponse}
    />
    <FormPrompt show={showFormPrompt} className={row} onClick={setShowForm} />
    <Form show={showForm} className={row} onSubmit={submitForm} />
    <ThankYouNote className={row} submitted={submitted} />
  </div>
);

export default Widget;