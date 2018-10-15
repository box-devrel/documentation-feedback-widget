import { h, Component } from "preact";

export default class ThankYouNote extends Component {
  componentWillReceiveProps({ show }) {
    if (show && !this.View) {
      import(/* webpackChunkName: "chunk-form" */ "../components/ThankYouNote")
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
