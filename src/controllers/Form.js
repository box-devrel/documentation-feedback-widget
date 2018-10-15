import { h, Component } from "preact";
import linkState from "linkstate";
import Cookie from "../utils/Cookie";

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
    this.cookie = new Cookie();
    this.state = {
      name: this.cookie.get("name"),
      email: this.cookie.get("email"),
      message: null
    };
  }

  /**
   * We link inputs to the state
   */
  onInput = (name) => {
    this.cookie.set(this.state);
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
    console.log(props); //eslint-disable-line
    return (
      <FormComponent 
        {...props} 
        {...state}
        onInput={this.onInput}
        onSubmit={this.onSubmit} />
    );
  }
}