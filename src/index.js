import { h, render } from "preact";

// // Local imports
// import Explorer from "./components/explorer";

/**
 * The entry point for our widget, allowing for the browser
 * to call `explorer.setup()` to bind a new widget to the
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
    let explorer = <h1>Test</h1>;
    render(explorer, container);
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