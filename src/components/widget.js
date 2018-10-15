import { h } from "preact";

// Local modules
import Header from "./Header";
import IconButtons from "./IconButtons";
import FormPrompt from "../loaders/FormPrompt";
import ThankYouNote from "../loaders/ThankYouNote";
import Form from "../loaders/Form";

// CSS Styles
import { container, row } from "../styles/Widget.scss";

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
    <Form show={showForm} className={row} onSubmit={onSubmit} />
    <ThankYouNote show={submitted} className={row} />
  </div>
);

export default Widget;