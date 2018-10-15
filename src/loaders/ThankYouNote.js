import { h, Component } from "preact";

/**
 * Lazy loads the component
 */
export default class ThankYouNote extends Component {
  componentWillReceiveProps({ show }) {
    if (show && !this.View) {
      import("../components/ThankYouNote")
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
