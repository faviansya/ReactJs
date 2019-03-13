import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import "../css/App.css";


class SignIn extends Component {
    state = { username: "", password: "" }
    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    };
    postLogin = () => {
        const { username, password } = this.state;
        const data = {
            username: username,
            password: password,
        };
        const self = this;
        axios
            .post("https://vians.free.beeceptor.com/auth")
            .then(function (response) {
                console.log(response.data);
                if (response.data.hasOwnProperty("api_key")) {
                    localStorage.setItem("api_key", response.data.api_key);
                    localStorage.setItem("is_login", true);
                    localStorage.setItem("full_name", username);
                    localStorage.setItem("email", "Faviansyah@mgial.com");
                    self.props.history.push("/profile");
                }
                console.log(response.data.api_key)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <div className="container mt-5">
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => this.changeInput(e)} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => this.changeInput(e)} />
                        </div>
                        <div className="form-check">
                        </div>
                        <button type="submit" onClick={() => this.postLogin()} className="btn btn-primary mb-5">Submit</button>
                    </form>
                </div>

            </div>
        );
    }
}
// export default withRouter(SignIn);

export default SignIn;