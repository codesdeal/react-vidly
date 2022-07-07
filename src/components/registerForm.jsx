import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class RegisterForm extends Form {
    state = {
        data: { name: '', email: '', password: ''},
        errors : {}
    };

    schema = {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().min(8).max(16).label('Password'),
        name: Joi.string().required().min(3).label('Name')
    };

    doSubmit = () => {
        console.log("submitted register from");
    }
  
    render() { 
        return (
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('name', 'Name')} 
                    {this.renderInput('email', 'Email')}
                    {this.renderInput('password', 'Password', "password")}                     
                    {this.renderButton('Register')}
                </form>
            </div>
        );
    }
}
 
export default RegisterForm;