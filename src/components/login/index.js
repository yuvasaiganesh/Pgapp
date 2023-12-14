import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
    isError: false,
    isLoggedIn: false,
  };

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  toSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    if (username === "yuvasaiganesh" && password === "Nani123") {
      const jwtToken = "Ganesha";

      Cookies.set("jwt_token", jwtToken, {
        expires: 30,
      });
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ error: "Invalid Password or UserName", login: true });
    }
  };

  render() {
    const { username, password, error, isError, isLoggedIn } = this.state;

    const token = Cookies.get("jwt_token");
    if (token !== undefined) {
      return <Navigate to="/" />;
    }

    if (isLoggedIn === true) {
      return <Navigate to="/" />;
    }

    return (
      <div className="loginSection">
        <form onSubmit={this.toSubmit}>
          <h1 className="heading">Welcome Back</h1>
          <div className="label">
            <label htmlFor="name">Username</label>
            <input
              id="name"
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={this.changeUsername}
              autoComplete="off"
            />
          </div>
          <div className="label">
            <label htmlFor="pass">Password</label>
            <input
              id="pass"
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={this.changePassword}
              autoComplete="off"
            />
          </div>
          <button className="loginButton" type="submit">
            Login
          </button>
          {isError && <p>{error}</p>}
        </form>
      </div>
    );
  }
}

export default Login;