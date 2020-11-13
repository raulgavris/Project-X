import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"

import { getHelloWorldRequest, postRegisterRequest } from '../../redux';

import styles from '../../styles/variables.scss';

import './Register.scss';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            username: '',
            password: '',
            firstname: '',
            lastname: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getHelloWorldDispatch();
        setTimeout(() => {
            this.setState({
                loaded: this.props.loaded,
                count: this.props.helloWorld.count,
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
                    logoSrc='https://raw.githubusercontent.com/gavrisraul/website-portfolio/master/frontend/assets/loading.png'
                    text='Loading...'
                    children=''
                />
            )
        }
        return (
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
                    }}>REGISTER</Button>
                </Form>
                <div className="policy">By continuing, you agree to accept our Privacy Policy & Terms of Service</div>
                <div className="suggest-login">Already have an account? LOG IN</div>
            </div>
        </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        helloWorld: state.helloWorldReducer.hello,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHelloWorldDispatch: () => dispatch(getHelloWorldRequest()),
        postRegisterRequest: () => dispatch(postRegisterRequest()),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
