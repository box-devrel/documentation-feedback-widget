import { h, Component } from "preact";

// Local modules
import WidgetComponent from "../components/Widget";

export default class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      response: null,
      showForm: false,
      showFormPrompt: false,
      submitted: false
    };
  }

  setResponse = response => {
    return () => {
      this.setState({
        loading: true,
        response: response
      });
      this.postData();
    };
  };

  postData = () => {
    setTimeout(this.disableLoading, 1000);
  }

  disableLoading = () => {
    this.setState({
      loading: false,
      showForm: this.state.showForm || !this.state.response,
      showFormPrompt: this.state.response && !this.state.showForm
    });
  }

  setShowForm = () => {
    this.setState({
      showForm: true,
      showFormPrompt: false
    });
  };

  onSubmit = () => {
    this.setState({
      onSubmitted: true,
      showForm: false,
      showFormPrompt: false
    });
  };

  render(_, props) {
    return <WidgetComponent 
      {...props}
      setResponse={this.setResponse}
      setShowForm={this.setShowForm}
      onSubmit={this.onSubmit} />;
  }
}
