import { h, Component } from "preact";

import Button from "preact-material-components/Button";
import LayoutGrid from "preact-material-components/LayoutGrid";
import Typography from "preact-material-components/Typography";

import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import "preact-material-components/LayoutGrid/style.css";
import "preact-material-components/Typography/style.css";

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
      <div className={style.this}>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              <Typography headline6>Was this documentation helpful?</Typography>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3">
              <Button unelevated>
                Yes
              </Button>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3">
              <Button unelevated class='mdc-theme--secondary-bg'>
                No
              </Button>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
