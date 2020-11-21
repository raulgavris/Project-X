import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import {  withRouter } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import { Link } from 'react-router-dom';


import {  postTokenRequest } from '../../redux';

import styles from '../../styles/variables.scss';

import './Login.scss';
import NavigationBar from '../NavigationBar'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                loaded: true,
            })
        }, 500);
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    async handleSubmit(e) {
        this.props.dispatch(postTokenRequest(this.state.email, this.state.password));
    }

    render() {
        // if (this.state.loaded === false) {
        //     return (
        //         <LoadingScreen
        //             loading={!this.state.loaded}
        //             bgColor={styles.color1}
        //             spinnerColor={styles.color2}
        //             textColor={styles.color4}
        //             logoSrc=''
        //             text='Loading Music Hub'
        //             children=''
        //         />
        //     )
        // }
        return (
        <div className='login_page'>
            <NavigationBar/>
            <div className="header">
                Connecting People Through Music
                <div className="login-wrapper">
                    <div className="login">
                        <Form onSubmit={this.handleSubmit}>
                            <h1 className="contact-title-login">Log In</h1>
                            <FormGroup className="formgroup-login">
                                <Input
                                    className="input-login"
                                    name="email"
                                    placeholder="Email"
                                    maxLength={100}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="formgroup-login">
                                <Input
                                    className="input-login"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    maxLength={20}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <Button className="submit-login" onClick={()=>{
                                this.handleSubmit()
                            }}>LOG IN</Button>
                        </Form>
                        <div className="policy">By continuing, you agree to accept our Privacy Policy & Terms of Service</div>
                        <div className="suggest-register">You don't have an account? <Link to='/register' className="inside-link">Register</Link></div>
                    </div>
                </div>
            </div>
        </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        access: state.loginReducer.access,
        refresh: state.loginReducer.refresh
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postTokenRequest: () => dispatch(postTokenRequest()),
        dispatch
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
