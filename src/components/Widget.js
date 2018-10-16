import { h } from "preact";

import Header from "./Header";
import IconButtons from "./IconButtons";
import Loader from "../utils/Loader";

import { container, row } from "../styles/Widget.scss";
import "preact-material-components/Theme/style.css";

/**
 * The actual view for our widget. Binds the UI to all the props and handlers
 */
const Widget = ({
  submitted,
  submittingShortResponse,
  submittingLongResponse,
  response,
  showForm,
  showFormPrompt,
  onSubmitShortResponse,
  onSubmitLongResponse,
  setShowForm
}) => (
  <div className={container}>
    <Header className={row} submitted={submitted} />
    <IconButtons
      className={row}
      submitted={submitted}
      loading={submittingShortResponse}
      response={response}
      onClick={onSubmitShortResponse}
    />
    <Loader 
      moduleName='components/FormPrompt'
      show={showFormPrompt} 
      className={row} 
      onClick={setShowForm} />
    <Loader
      moduleName='controllers/Form'
      show={showForm}
      className={row}
      disabled={submittingLongResponse}
      onSubmit={onSubmitLongResponse}
    />
    <Loader 
      moduleName='components/ThankYouNote'
      show={submitted} 
      className={row} />
  </div>
);

export default Widget;