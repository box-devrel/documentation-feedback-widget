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
      submitted: false
    };
  }

  /**
   * Submits a response to the server
   */
  submitResponse = response => {
    return () => {
      this.setState({
        loading: true,
        response: response
      });
      this.postData();
    };
  };

  /**
   * TBI: Pretend to submit the data
   */
  postData = () => {
    setTimeout(this.endLoading, 1000);
  }

  /**
   * Ends any loading spinners
   */
  endLoading = () => {
    this.setState({
      loading: false,
      showForm: this.state.showForm || !this.state.response,
      showFormPrompt: this.state.response && !this.state.showForm
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
  submitFeedback = () => {
    this.setState({
      submitted: true,
      showForm: false,
      showFormPrompt: false
    });
  };

  /**
   * Render the view
   */
  render(_, props) {
    return <WidgetComponent 
      {...props}
      setResponse={this.submitResponse}
      setShowForm={this.setShowForm}
      onSubmit={this.submitFeedback} />;
  }
}
