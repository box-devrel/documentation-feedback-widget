import { h, Component } from "preact";

/**
 * Lazy loads the component
 */
export default class FormPrompt extends Component {
  componentWillReceiveProps({ show }) {
    if (show && !this.View) {
      import(/* webpackChunkName: "chunk-form-prompt" */ "../components/FormPrompt")
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
