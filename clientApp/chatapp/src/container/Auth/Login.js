import React, {Component} from 'react'
import Spinner from '../../components/UI/Spinner/Spinner'
import {NavLink} from 'react-router-dom'

import Button from './../../components/UI/Button/Button'
import SubmitButton from './../../components/UI/Button/SubmitButton'

import './Login.css'

class Login extends Component {

    state = {
        login: "",
        password: "",
        isLoading: false,
    };


    onFieldChange = (event, param) => {

        this.setState({
            ...this.state,
            [param]: event.target.value

        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            isLoading: true
        })

        fetch('http://localhost:8080/api/loginUser', {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                login: this.state.login,
                password: this.state.password,
            })
        }).then((response) => {

            return response.json();

        }).then((data) => {

            this.setState({
                isLoading: false,
                isModal: true
            });

            if (data.msg === null) {
                this.props.authUser();


                this.props.storeUser(data);
                this.props.localStore();

            }
        })
    }


    render() {
        let body
        let buttons = (
            <div>
                <SubmitButton text='Sign in'/>

                <NavLink to='/Signup' exact>
                    <Button text='Register'/>
                </NavLink>
            </div>
        )

        if (this.state.isLoading) {
            body = <Spinner/>
        } else {
            body =
                <div className="body">
                    <div className="container-md">
                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"
                                                      id="addon-wrapping">Username</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Username"
                                                   aria-label="Username" aria-describedby="addon-wrapping"
                                                   value={this.state.login}
                                                   onChange={(event) => this.onFieldChange(event,"login")}
                                            />
                                        </div>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="addon-wrapping">Password</span>
                                            </div>
                                            <input type="password" className="form-control"
                                                   placeholder="password"
                                                   aria-describedby="addon-wrapping"
                                                   value={this.state.password}
                                                   onChange={(event) => this.onFieldChange(event,"password")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {buttons}
                            </form>
                        </div>
                    </div>
                </div>
        }

        return (
            body

        )
    }
}

export default Login