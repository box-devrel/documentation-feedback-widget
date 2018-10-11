import { h, Component } from "preact";

import Elevation from "preact-material-components/Elevation";
import Button from "preact-material-components/Button";
import LayoutGrid from "preact-material-components/LayoutGrid";
import Typography from "preact-material-components/Typography";
import TextField from "preact-material-components/TextField";
import Icon from "preact-material-components/Icon";

import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import "preact-material-components/LayoutGrid/style.css";
import "preact-material-components/Typography/style.css";
import "preact-material-components/Icon/style.css";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Elevation/style.css";

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
      showForm: true,
      showFormPrompt: false
    };
  }

  toggleUseful(useful) {
    return () => {
      this.setState({
        ...this.state,
        useful: useful,
        showForm: this.state.showForm || !useful,
        showFormPrompt: useful && !this.state.showForm
      });
    };
  }

  showForm() {
    this.setState({
      ...this.state,
      showForm: true,
      showFormPrompt: false
    });
  }


  /**
   * Renders the basic widget with a yes/no question
   */
  render() {
    return (
      <Elevation z={2} className={style.this}>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              <Typography headline6>
                <strong>Was this documentation helpful?</strong>
              </Typography>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="12">
              <Button 
                positive
                outlined={this.state.useful !== true}
                raised={this.state.useful === true} 
                onClick={this.toggleUseful(true).bind(this)}>
                <Icon>thumb_up</Icon>
              </Button>
              <Button 
                onClick={this.toggleUseful(false).bind(this)}
                negative 
                outlined={ this.state.useful !== false }
                raised={ this.state.useful === false }
                class={this.state.useful === false ? "mdc-theme--secondary-bg" : "mdc-theme--secondary" }>
                <Icon>thumb_down</Icon>
              </Button>
            </LayoutGrid.Cell>
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
                    <TextField outlined label="Email (optional)" />
                  </LayoutGrid.Cell>
                  <LayoutGrid.Cell cols="12">
                    <TextField textarea={true} label="How could we improve it? (optional)" />
                  </LayoutGrid.Cell>
                  <LayoutGrid.Cell>
                    <Button unelevated>Send Feedback</Button>
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
          </LayoutGrid.Inner>
        </LayoutGrid>
      </Elevation>
    );
  }
}
