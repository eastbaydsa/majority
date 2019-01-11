import React from 'react';
import { Machine } from 'react-xstate-js';
import config from './newsletterFormMachineConfig';
import Success from './components/Success';
import Waiting from './components/Waiting';
import Form from './components/Form';
import callLambdaFunction from './callLambdaFunction';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "foo@example.com",
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

  render() {
    return (<div>
      <Machine config={config}>{(({ service, state }) => {
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
              onSubmit={(event) => {
                event.preventDefault();
                service.send({ type: "SUBMIT" });
                callLambdaFunction("nb-people-push", this.state, (err, response) => {
                  if (err) {
                    return service.send({ type: "ERROR" })
                  }
                  service.send({ type: "SIGNED_UP" });
                })
              }}
            />
          )
        }
      })}</Machine>
    </div>)
  }
}

export default NewsletterForm;