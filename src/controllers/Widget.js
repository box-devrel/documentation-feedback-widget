import  { createElement, Component } from "react";

import Loader from "../utils/Loader";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#0060d5"
    },
    secondary: {
      main: "#fc6179",
      contrastText: "#fff"
    }
  }
});

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
      responseId: null, 
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
   * Submits any more further feedback
   */
  submitLongResponse = (feedback) => {
    this.setState({
      submittingLongResponse: true
    });
    this.postLongData(feedback);
  };

  /**
   * Post basic response
   */
  postShortData = (response) => {
    fetch(`${this.props.endpoint}/feedback/short`, {
      method: "POST",
      body: JSON.stringify({
        useful: response,
        url: document.location.href,
        id: this.state.id
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }).then(res => res.json()).then(this.onShortDataSubmitted);
  }


  /**
   * Post a longer response
   */
  postLongData = (feedback) => {
    let data = { 
      ...feedback, 
      url: document.location.href,
      useful: this.state.response,
      id: this.state.id
    };
    fetch(`${this.props.endpoint}/feedback/long`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(res => res.json())
      .then(this.onLongDataSubmitted);
  }

  /**
   * Ends any loading spinners
   */
  onShortDataSubmitted = (response) => {
    this.setState({
      id: response.id,
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
   * Render the view
   */
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Loader 
          moduleName='components/Widget'
          show={true}
          {...this.state}
          onSubmitShortResponse={this.submitShortResponse}
          setShowForm={this.setShowForm}
          onSubmitLongResponse={this.submitLongResponse} />
      </MuiThemeProvider>
    );
  }
}
