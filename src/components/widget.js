import { h, Component } from "preact";

import Elevation from "preact-material-components/Elevation";
import Button from "preact-material-components/Button";
import LayoutGrid from "preact-material-components/LayoutGrid";
import Typography from "preact-material-components/Typography";
import TextField from "preact-material-components/TextField";

import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import "preact-material-components/LayoutGrid/style.css";
import "preact-material-components/Typography/style.css";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Elevation/style.css";

import IconButton from "./IconButton";

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
    this.state = { 
      useful: null,
      showForm: false,
      showFormPrompt: false,
      submitted: false
    };
  }

  postData() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        loading: false,
        showForm: this.state.showForm || !this.state.useful,
        showFormPrompt: this.state.useful && !this.state.showForm
      });
    }, 1000);
  }

  toggleUseful(useful) {
    return () => {
      this.setState({
        ...this.state,
        loading: true,
        useful: useful
      });
      this.postData();
    };
  }

  showForm() {
    this.setState({
      ...this.state,
      showForm: true,
      showFormPrompt: false
    });
  }

  submit() {
    this.setState({
      ...this.state,
      submitted: true,
      showForm: false,
      showFormPrompt: false
    });
  }


  /**
   * Renders the basic widget with a yes/no question
   */
  render() {
    return (
      <Elevation z={1} className={style.this}>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              <Typography headline6>
                <strong>Was this documentation helpful?</strong>
              </Typography>
            </LayoutGrid.Cell>
            {this.state.submitted !== true && (
              <LayoutGrid.Cell cols="12">
                <LayoutGrid.Inner>
                  <LayoutGrid.Cell cols="12">
                    <IconButton 
                      positive={true}
                      loading={this.state.loading}
                      useful={this.state.useful} 
                      onClick={this.toggleUseful(true).bind(this)} />

                    <IconButton
                      positive={false}
                      loading={this.state.loading}
                      state={this.state}
                      useful={this.state.useful} 
                      onClick={this.toggleUseful(false).bind(this)} />
                  </LayoutGrid.Cell>
                </LayoutGrid.Inner>
              </LayoutGrid.Cell>
            )}
            {this.state.showFormPrompt === true && (
              <LayoutGrid.Cell cols="12">
                Thank you! 
                <a onClick={ this.showForm.bind(this) }>
                  Give us some feedback.
                </a>
              </LayoutGrid.Cell>
            )}  
            { this.state.showForm === true && (
              <LayoutGrid.Cell cols="12">
                <LayoutGrid.Inner>
                  <LayoutGrid.Cell cols="12">
                    <TextField outlined label="Email (optional)" type='email' />
                  </LayoutGrid.Cell>
                  <LayoutGrid.Cell cols="12">
                    <TextField textarea={true} label="How could we improve it? (optional)" />
                  </LayoutGrid.Cell>
                  <LayoutGrid.Cell>
                    <Button unelevated onClick={ this.submit.bind(this) }>Send Feedback</Button>
                  </LayoutGrid.Cell>
                </LayoutGrid.Inner>
                <hr/>
                <LayoutGrid.Inner>
                  <LayoutGrid.Cell cols="12">
                    <Typography caption>
                      Your data will be treated in accordance with our 
                      <a href="https://account.box.com/legal_text/privacy_policy">Privacy Policy</a>, 
                      which sets out the rights you have in respect of your data.
                    </Typography>
                  </LayoutGrid.Cell>
                </LayoutGrid.Inner>
              </LayoutGrid.Cell>
            )}    
            {this.state.submitted === true && (   
              <LayoutGrid.Cell cols="12">
                <LayoutGrid.Inner>
                  <LayoutGrid.Cell cols="12">
                    <Typography body1>
                      Thank you for your feedback.
                    </Typography> 
                  </LayoutGrid.Cell>
                </LayoutGrid.Inner>
              </LayoutGrid.Cell>
            )}  
          </LayoutGrid.Inner>
        </LayoutGrid>
      </Elevation>
    );
  }
}
