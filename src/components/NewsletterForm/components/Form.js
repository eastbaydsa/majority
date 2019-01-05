import React from 'react';

class Form extends React.Component {
  render() {
    const { email, firstName, lastName, onSubmit, onEmailChange, onFirstNameChange, onLastNameChange } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input placeholder="hello@example.com" type="email" onChange={function(e) { onEmailChange(e.target.value) }} value={email} />
        <label htmlFor="firstName">First name</label>
        <input placeholder="First" type="firstName" onChange={function(e) { onFirstNameChange(e.target.value) }} value={firstName} />
        <label htmlFor="lastName">Last name</label>
        <input placeholder="Last" type="lastName" onChange={function(e) { onLastNameChange(e.target.value) }} value={lastName} />
        <input type="submit" />
      </form>
    )
  }
}

export default Form;