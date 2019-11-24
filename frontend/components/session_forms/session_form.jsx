import React from 'react';

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
      .then(() => { this.props.closeModal(); })
      // .then(() => this.props.history.push(`/`));
  }

  handleDemo(e) {
    e.preventDefault();
    const demo_user = {email: `hunter2@gmail.com`, password: `hunter2`};
    this.props.processForm(demo_user)
      .then(() =>{this.props.closeModal();})
      // .then(() => this.props.history.push(`/`));
  }

  renderDemo() {
    return this.props.formType === "login" ? (
      <input
        className="demo-login"
        onClick={this.handleDemo}
        type="submit"
        value="Demo Login"
      />
    ) : null
  }

  render() {
    let message;
    let sessionForm;
      if(this.props.formType === "signup") {
       message = "Already have a LiftsInNOut account?"
        sessionForm = 
        <div className="form-input">
          <h3>Sign up with your email</h3>
          <div className='button-border'></div>
          <div className='field-border'>
          <input className="form-fields" type="email" placeholder="Email" onChange={this.update("email")} required/>
          </div>
          <div className='field-border'>
          <input className="form-fields" type="text" placeholder="First Name" onChange={this.update("fname")} required/>
          </div>
          <div className='field-border'>
          <input className="form-fields" type="text" placeholder="Last Name" onChange={this.update("lname")} required/>
          </div>
          <div className='field-border'>
          <input className="form-fields" type="password" placeholder="Password" onChange={this.update("password")} required/>
          </div>
          <div className='button-border'></div>
          <button className='modal-submit'>
            <span className='button-text'> Sign up </span>
          </button>
          <div className='button-border'></div>
        </div >
      } else {
        message = "Don't have an account?"
        sessionForm =
        <div className="form-input">
          <h3>Log in with your email</h3>
          <div className='button-border'></div>
          <div className='field-border'>
          <input className="form-fields" type="email" placeholder="Email" onChange={this.update("email")} required/>
          </div>
          <div className='field-border'>
          <input className="form-fields" type="password" placeholder="Password" onChange={this.update("password")} required/>
          </div>
          <div className='button-border'></div>
            <button className='modal-submit'>
              <span className='button-text'>
                Log in
              </span>    
            </button>
          <div className='button-border'></div>
          {this.renderDemo()}
          <div className='button-border'></div>
        </div>
      }

    let errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);

    return (
      <section className='modal-section'>
      <form className='modal-form' onSubmit={this.handleSubmit}>
        <div className='close-button' onClick={this.props.closeModal}> &times; </div>
        <div className='button-border'></div>
        <ul className='errors'>
          {errors}
        </ul>
        <div className='form-contents'>
        {sessionForm}
        </div>
      </form>
        <div className="other-form">
          {message} {this.props.otherForm}
        </div>
      </section>
    )
  }
}


export default SessionForm;