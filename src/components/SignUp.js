import React, {Component} from "react";

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      userName: "",
      password: "",
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <form>
      <h1>SignUp</h1>
      <fieldset>
        <legend>Login Info:</legend>
          <label for="userName">User Name: </label>
          <input
            type="text"
            value={this.state.userName}
            name="userName"
            placeholder="username" onChange={this.handleChange}
          />
          <br />
          <label for="password">Password: </label>
          <input
            type="text"
            value={this.state.password}
            name="password"
            placeholder="password" onChange={this.handleChange}
          />
          <h1>{this.state.userName} {this.state.password}</h1>
      </fieldset>
      <fieldset>
        <legend>Personal Info:</legend>
          <label for="firstName">First Name: </label>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="first name"
            onChange={this.handleChange}
          />
          <br />
          <label for="lastName">Last Name: </label>
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="last name"
            onChange={this.handleChange}
          />
          <h1>{this.state.firstName} {this.state.lastName}</h1>
        </fieldset>
      </form>
    )
  }
}

export default SignUp;
