import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios'

import './footer.scss'
import Logo from '../Logo'
import ebdsaLogo from '../../img/ebdsa-logo@2x.png'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['ManifoldDSA', 'Helvetica Neue', 'Arial', 'Sans-Serif'].join(
      ','
    ),
  },
  palette: {
    type: 'dark',
  },
})

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__columns">
            <div className="footer__column footer__column--links">
              <NewsletterSignup />
            </div>
            <div className="footer__column footer__column--logos">
              <Logo />
              <div className="ebdsa">
                <img src={ebdsaLogo} alt="East Bay DSA" />
                <p>
                  A publication of the
                  <br />
                  Democratic Socialists of America,
                  <br />
                  East Bay chapter.
                  <br />
                  <a href="mailto:majority@eastbaydsa.org">
                    majority@eastbaydsa.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

class NewsletterSignup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    loading: false,
    response: null,
  }

  handleChange = fieldName => event => {
    this.setState({ [fieldName]: event.target.value })
  }

  submit = async () => {
    this.setState({ loading: true })
    const res = await axios.post('/.netlify/functions/email-signup', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    })
    this.setState({ loading: false, response: res.data })
  }

  render() {
    return (
      <div className="newsletter">
        <h3>Sign up for Majority's newsletter</h3>
        <MuiThemeProvider theme={theme}>
          <div className="newsletter__name">
            <Input
              onChange={this.handleChange('firstName')}
              value={this.state.firstName}
              label="First Name"
            />
            <Input
              onChange={this.handleChange('lastName')}
              value={this.state.lastName}
              label="Last Name"
            />
          </div>
          <div className="newsletter__email">
            <Input
              onChange={this.handleChange('email')}
              value={this.state.email}
              label="Email Address"
              type="email"
            />
          </div>
          <div className="newsletter__button-wrapper">
            {!this.state.loading && this.state.response === null && (
              <Button
                onClick={this.submit}
                disabled={
                  this.state.email === '' ||
                  !this.state.email.includes('@') ||
                  !this.state.email.includes('.')
                }
                variant="contained"
                className="newsletter__button"
                classes={{ disabled: 'newsletter__button--disabled' }}
              >
                Sign Up
              </Button>
            )}
            {this.state.loading && (
              <CircularProgress
                size={31}
                className="newsletter__progress"
                classes={{ svg: 'newsletter__progress-svg' }}
              />
            )}
            {this.state.response && (
              <p className="newsletter__message">{this.state.response}</p>
            )}
            <p className="newsletter__fine-print">
              We will never sell or share your data
            </p>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

const Input = ({ onChange, value, label, type }) => (
  <TextField
    classes={{
      root: 'footer-input',
    }}
    InputProps={{
      classes: {
        focused: 'footer-input--focused',
        notchedOutline: 'footer-input__notched-outline',
        input: 'footer-input__input',
      },
    }}
    InputLabelProps={{
      classes: {
        root: 'footer-input__label',
      },
    }}
    label={label}
    value={value}
    onChange={onChange}
    margin="dense"
    variant="outlined"
    type={type}
  />
)

export default Footer
