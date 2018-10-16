import { h, render } from "preact";

// // Local imports
import Widget from "./controllers/Widget";

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
    let widget = <Widget {...this.config}>Test</Widget>;
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