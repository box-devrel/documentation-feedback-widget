import { h, Component } from "preact";

export default class Form extends Component {
  componentWillReceiveProps({ show }) {
    if (show && !this.View) {
      import(/* webpackChunkName: "chunk-thank-you" */ "../components/Form" )
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
 