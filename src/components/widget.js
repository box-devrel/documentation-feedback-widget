import { h } from "preact";

import Header from "./Header";
import IconButtons from "./IconButtons";
import FormPrompt from "../loaders/FormPrompt";
import ThankYouNote from "../loaders/ThankYouNote";
import Form from "../loaders/Form";

import { container, row } from "../styles/Widget.scss";
import "preact-material-components/Theme/style.css";

/**
 * The actual view for our widget. Binds the UI to all the props and handlers
 */
const Widget = ({
  submitted,
  loading,
  response,
  showForm,
  showFormPrompt,
  setResponse,
  onSubmit,
  setShowForm
}) => (
  <div className={container}>
    <Header className={row} submitted={submitted} />
    <IconButtons
      className={row}
      submitted={submitted}
      loading={loading}
      response={response}
      onClick={setResponse}
    />
    <FormPrompt show={showFormPrompt} className={row} onClick={setShowForm} />
    <Form moduleName="../components/Form" show={showForm} className={row} onSubmit={onSubmit} />
    <ThankYouNote show={submitted} className={row} />
  </div>
);

export default Widget;