import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import { Link } from 'react-router-dom';

import { postRegisterRequest } from '../../redux';

import styles from '../../styles/variables.scss';

import './Register.scss';
import NavigationBar from '../NavigationBar'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
            username: '',
            password: '',
            firstname: '',
            lastname: '',
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
        this.props.dispatch(postRegisterRequest(this.state.username, this.state.password, this.state.firstname, this.state.lastname));
    }

    render() {
        if (this.state.loaded === false) {
            return (
                <LoadingScreen
                    loading={!this.state.loaded}
                    bgColor={styles.color1}
                    spinnerColor={styles.color2}
                    textColor={styles.color4}
                    logoSrc='frontend/src/components/NavigationBar/assets/favicon.ico'
                    text='Loading Music Hub'
                    children=''
                />
            )
        }
        return (
            <div className="register_page">
                <NavigationBar />
                <div className="header">Connecting People Through Music
                    <div className="register-wrapper">
                    <div className="register">
                        <Form onSubmit={this.handleSubmit}>
                            <h1 className="contact-title-register">Register</h1>
                            <FormGroup className="formgroup-register">
                                <Input
                                    className="input-register"
                                    name="username"
                                    placeholder="Username"
                                    maxLength={20}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="formgroup-register">
                                <Input
                                    className="input-register"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    maxLength={20}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="formgroup-register">
                                <Input
                                    className="input-register"
                                    name="firstname"
                                    placeholder="First Name"
                                    maxLength={20}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="formgroup-register">
                                <Input
                                    className="input-register"
                                    name="lastname"
                                    placeholder="Last Name"
                                    maxLength={20}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <Button className="submit-register" onClick={()=>{
                                this.handleSubmit()
                            }}><Link to='/login'>REGISTER</Link></Button>
                        </Form>
                        <div className="policy">By continuing, you agree to accept our Privacy Policy & Terms of Service</div>
                        <div className="suggest-login">Already have an account? <Link to='/login' class="inside-link">Login</Link></div>
                    </div>
                </div>
            </div>
        </div>
        );
    };
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        postRegisterRequest: () => dispatch(postRegisterRequest()),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
