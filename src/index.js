import "promise-polyfill/src/polyfill";

import { createElement } from "react";
import { render } from "react-dom";

// // Local imports
import Loader from "./utils/Loader";

/**
 * The entry point for our widget, allowing for the browser
 * to call `feedback.setup()` to bind a new widget to the
 * browser.
 */
class DocumentationFeedback {
  /**
   * Initializes the demo object
   */
  constructor(config) {
    this.config = config;
  }

  /**
   * Sets up the widget and binds it to an element in the browser.
   */
  bind() {
    let container = document.querySelector(this.config.element);
    let widget = <Loader
      show={true}
      moduleName="controllers/Widget" 
      {...this.config}/>;
    render(widget, container);
  }

  /**
   * Initializes a new Exploration demo and binds it to the
   * UI.
   */
  static setup(config) {
    new DocumentationFeedback(config).bind();
  }
}



export default DocumentationFeedback;