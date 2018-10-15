import { h, Component } from "preact";

// Local modules
import Header from "./Header";
import IconButtons from "./IconButtons";
import FormPrompt from "./FormPrompt";
import ThankYouNote from "./ThankYouNote";
import Form from "./Form";

// CSS Styles
import { container, row } from "../styles/widget.scss";

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

  showForm = () => {
    this.setState({
      showForm: true,
      showFormPrompt: false
    });
  };

  submit = () => {
    this.setState({
      submitted: true,
      showForm: false,
      showFormPrompt: false
    });
  };

  render(_, { submitted, loading, response, showForm, showFormPrompt }) {
    return (
      <div className={container}>
        <Header className={row} />
        <IconButtons 
          className={row} 
          submitted={submitted}
          loading={loading}
          response={response} 
          onClick={this.setResponse}/>
        <FormPrompt 
          show={showFormPrompt}
          className={row}
          onClick={this.showForm}
        />
        <Form
          show={showForm}
          className={row}
          onSubmit={this.submit} />
        <ThankYouNote
          className={row}
          submitted={submitted} />  
      </div>
    );
  }
}
