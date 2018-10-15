import { h, Component } from "preact";
import linkState from "linkstate";

import FormComponent from "../components/Form";

/**
 * Controller for the form, defines and handles state
 */
export default class Form extends Component {
  /**
   * We start with no feedback
   */
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null
    };
  }

  /**
   * We link inputs to the state
   */
  onInput = (name) => {
    return linkState(this, name);
  }

  /** 
   * When submitting, we provide the latest state as the submission
   */
  onSubmit = (e) => {
    this.props.onSubmit(this.state);
    e.preventDefault();
  }
  
  /**
   * Render the view
   */
  render(props, state) {
    return (
      <FormComponent 
        {...props} 
        {...state}
        onInput={this.onInput}
        onSubmit={this.onSubmit} />
    );
  }
}