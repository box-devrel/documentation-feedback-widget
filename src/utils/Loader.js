import { h, Component } from "preact";

/**
 * Lazy loads the component
 */
export default class Loader extends Component {
  componentWillReceiveProps({ show, moduleName }) {
    if (show && !this.View) {
      import(`../${moduleName}`)
        .then((module) => {
          this.View = module.default;
          this.forceUpdate();
        });
    }
  }

  render({ show, ...props }) {
    return <div>{this.View && show && <this.View {...props} />}</div>;
  }
}
