import { createElement } from "react";

import Header from "./Header";
import IconButtons from "./IconButtons";
import Loader from "../utils/Loader";

import { container, row } from "../styles/Widget.scss";

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
    <Header submitted={submitted} className={row} />
    <IconButtons
      submitted={submitted}
      loading={submittingShortResponse}
      response={response}
      onClick={onSubmitShortResponse} />
    { showFormPrompt && (
      <Loader
        key={showFormPrompt}
        moduleName='components/FormPrompt'
        show={showFormPrompt}
        className={row}
        onClick={setShowForm} />
    )}
    { showForm && (
      <Loader
        moduleName='controllers/Form'
        show={showForm}
        className={row}
        disabled={submittingLongResponse}
        onSubmit={onSubmitLongResponse} />
    )}
    { submitted && (
      <Loader
        moduleName='components/ThankYouNote'
        show={submitted}
        className={row} />
    )}
  </div>
);

export default Widget;