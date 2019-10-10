import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push(`/`));
  }

  handleDemo(e) {
    e.preventDefault();
    const demo_user = {email: `hunter2@gmail.com`, password: `hunter2`};
    this.props.processForm(demo_user)
      .then(() => this.props.history.push(`/`));
  }

  renderDemo() {
    return this.props.formType === "Login" ? (
      <input
        className="demo-login"
        onClick={this.handleDemo}
        type="submit"
        value="Demo Login"
      />
    ) : null
  }

  render() {
    let link;
    let linkDesc;
    let sessionForm;
      if(this.props.formType === "Sign Up") {
       link = '/login'
       linkDesc = "Login Here"
        sessionForm = 
        <section>
          <label>First Name:
          <input type="text" onChange={this.update("fname")} />
          </label>
          <label>Last Name:
          <input type="text" onChange={this.update("lname")} />
          </label>
          <label>Email
          <input type="text" onChange={this.update("email")} />
          </label>
          <label>Password
          <input type="password" onChange={this.update("password")} />
          </label>
          <button>Submit</button>
        </section >
      } else {
        link = '/signup'
        linkDesc = 'Sign Up Here'
        sessionForm =
        <section>
          <label>Email
          <input type="text" onChange={this.update("email")} />
          </label>
          <label>Password
          <input type="password" onChange={this.update("password")} />
          </label>
          <button>Submit</button> {this.renderDemo()}
        </section>
      }

    // debugger;
    let errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);

    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {errors}
        </ul>
  
      {/* <header>{this.props.formType}</header> */}
        {sessionForm}
      </form>
    )
  }
}


export default SessionForm;