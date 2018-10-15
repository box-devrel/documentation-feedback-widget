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
    setTimeout(this.onShortDataSubmitted, 100);
  }


  /**
   * TBI: Pretend to submit the data
   */
  postLongData = (feedback) => {
    let data = { ...feedback, response: this.state.response };
    console.log(data); //eslint-disable-line
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
      submitted: true,
      submittingLongResponse: false,
      showForm: false
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
      submittingLongResponse: true
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
