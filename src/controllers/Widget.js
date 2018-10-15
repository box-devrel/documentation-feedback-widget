import { h, Component } from "preact";

import WidgetComponent from "../components/Widget";

/**
 * Controller for the widget, defines and handles state
 */
export default class Widget extends Component {
  /**
   * Assume no feedback submitted yet, and hide the form
   */
  constructor(props) {
    super(props);
    this.state = { 
      response: null,
      showForm: false,
      showFormPrompt: false,
      submitted: false,
      submittingShortResponse: false,
      submittingLongResponse: false
    };
  }

  /**
   * Submits a response to the server
   */
  submitShortResponse = response => {
    return () => {
      this.setState({
        submittingShortResponse: true,
        response: response
      });
      this.postShortData(response);
    };
  };

  /**
   * TBI: Pretend to submit the data
   */
  postShortData = (response) => {
    console.log(response); //eslint-disable-line
    setTimeout(this.onShortDataSubmitted, 1000);
  }


  /**
   * TBI: Pretend to submit the data
   */
  postLongData = (feedback) => {
    console.log({ ...feedback, response: this.state.response }); //eslint-disable-line
    setTimeout(this.onLongDataSubmitted, 1000);
  }

  /**
   * Ends any loading spinners
   */
  onShortDataSubmitted = () => {
    this.setState({
      submittingShortResponse: false,
      showForm: this.state.showForm || !this.state.response,
      showFormPrompt: this.state.response && !this.state.showForm
    });
  }

  /** 
   * End loading spinners after long data submitted
   */
  onLongDataSubmitted = () => {
    this.setState({
      submittingLongResponse: false
    });
  }

  /**
   * Shows the form, used whe the user first provides on 
   * a positive response
   */
  setShowForm = () => {
    this.setState({
      showForm: true,
      showFormPrompt: false
    });
  };

  /**
   * Submits any more further feedback
   */
  submitLongResponse = (feedback) => {
    this.setState({
      submitted: true,
      submittingLongResponse: true,
      showForm: false
    });
    this.postLongData(feedback);
  };

  /**
   * Render the view
   */
  render(_, state) {
    return <WidgetComponent 
      {...state}
      onSubmitShortResponse={this.submitShortResponse}
      setShowForm={this.setShowForm}
      onSubmitLongResponse={this.submitLongResponse} />;
  }
}
