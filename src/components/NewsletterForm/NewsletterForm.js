import React from 'react';
import { Machine } from 'react-xstate-js';
import config from './newsletterFormMachineConfig';
import Success from './components/Success';
import Waiting from './components/Waiting';
import Form from './components/Form';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "foo",
      firstName: "bar",
      lastName: "baz"
    }
  }

  setEmail = (email) => {
    this.setState({ email });
  }

  setFirstName = (firstName) => {
    this.setState({ firstName });
  }

  setLastName = (lastName) => {
    this.setState({ lastName });
  }

  handleSubmit = () => {
    console.log('the form was submitted', this.state);
  }

  handleSuccess = () => {

  }

  handleError = () => {
    
  }

  render() {
    const options = {
      actions: {
        submitSignupForm: this.handleSubmit
      }
    }
    
    return (<div>
      <Machine config={config} options={options}>{(({ service, state }) => {
        if (state.value === 'submitted') {
          return <Waiting />
        } else if (state.value === "signedUp") {
          return <Success />
        } else {
          return (
            <Form
              {...this.state}
              onEmailChange={this.setEmail}
              onFirstNameChange={this.setFirstName}
              onLastNameChange={this.setLastName}
              onSubmit={() => { service.send({ type: "SUBMIT" })}}
            />
          )
        }
      })}</Machine>
    </div>)
  }
}

export default NewsletterForm;