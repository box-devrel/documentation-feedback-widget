import { createElement, Component, Fragment } from "react";

/**
 * Lazy loads the component
 */
export default class Loader extends Component {
  constructor(props){
    super(props);
    this.state = { View: null };
  }

  loadModule() {
    if (this.props.show && !this.state.View) {
      import(`../${this.props.moduleName}`)
        .then((module) => {
          this.setState({ View: module.default });
        });
    }
  }
  
  render() {
    this.loadModule();
    return (
      <Fragment>
        { this.state.View && this.props.show && <this.state.View {...this.props} />}
      </Fragment>
    );
  }
}
