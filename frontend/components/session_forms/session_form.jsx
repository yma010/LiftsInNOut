import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push(`/`));
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    let link;
    let linkDesc;
    let extraElement;

    if (this.props.formType === 'signup'){
      link = '/login'
      linkDesc = "Login Here"
    } else {
      link = '/signup'
      linkDesc = 'Sign Up Here'
      extraElement = <div>
        <label>First Name:
          <input type="text" onChange={this.update("fname")} />
      </label>
        <label>Last Name:
          <input type="text" onChange={this.update("lname")} />
        </label>
      </div>
    }
    debugger;
    let errors = this.props.errors.map((error, i) => 
      <li key={i}>
      {error}</li>);

    return(
      <form onSubmit={this.handleSubmit}>
        <ul>
          {errors}
        </ul>

        <header>
          {this.props.formType}
        </header>
        <Link to={link}>{linkDesc}</Link>
        {extraElement}
        <label>Email:
          <input type="text" onChange={this.update("email")} />
        </label>
        <label>Password:
          <input type="password" onChange={this.update("password")} />
        </label>
      </form>
    );
  }
}

export default SessionForm;
