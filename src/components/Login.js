import React, {Component} from "react";

class Login extends Component {
  constructor() {
    super()
    this.state = {
      userName: "",
      password: ""
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
        <input
          type="text"
          value={this.state.userName}
          name="userName"
          placeholder="username" onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.password}
          name="password"
          placeholder="password" onChange={this.handleChange}
        />

        <h1>{this.state.userName} {this.state.password}</h1>
      </form>
    )
  }
}

export default Login;
