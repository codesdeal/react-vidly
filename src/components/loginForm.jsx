import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
    state = {
        data: { username: '', password: ''},
        errors : {}
    };

    schema = {
        username: Joi.string().required().min(3).label('Username'),
        password: Joi.string().required().min(5).max(12).label('Password')
    };

    doSubmit = () => {
        console.log("Login form submitted");
    }
  
    render() { 
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', "password")} 
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}
 
export default LoginForm;