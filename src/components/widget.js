import { h, Component } from "preact";

// Local imports
// import Blocks from "./blocks";
// import Config from "./config";
// import Steps from "./steps";

// CSS Styles
import style from "../styles/widget.scss";

/**
 * An interactive feedback widget
 */
export default class Widget extends Component {
  /**
   * By default we assume we have not to have any answers yet
   */
  constructor(props) {
    super(props);
    this.state = { useful: null };
    // this.config = new Config(this);
  }

  /**
   * Once the component mounts, we try to load the config object
   */
  // componentDidMount() {
  //   this.config.load();
  // }

  /**
   * When a step is loaded, load the code samples and output for
   * that step.
   */
  // stepDidLoad(stepId) {
  //   this.config.loadStep(stepId);
  // }

  /**
   * Renders a menu and a list of steps that can
   * be navigated to using the menu.
   *
   * @return {Component} a Preact component
   */
  render() {
    return (
      <div className={style.this.concat(" feedback-widget")}>
        Test
      </div>
    );
  }
}
