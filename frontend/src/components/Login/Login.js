import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"

import { getHelloWorldRequest, postTokenRequest } from '../../redux';

import styles from '../../styles/variables.scss';

import './Login.scss';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            username: '',
            password: '',
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
        this.props.dispatch(postTokenRequest(this.state.username, this.state.password));
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
        <div className="login-wrapper">
            <div className="login">
                <Form onSubmit={this.handleSubmit}>
                    <h1 className="contact-title-login">Log In</h1>
                    <FormGroup className="formgroup-login">
                        <FontAwesomeIcon className="icon-login" size="1x" icon={faUser} />
                        <Input
                            className="input-login"
                            // type="password"
                            name="username"
                            placeholder="Username"
                            maxLength={20}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="formgroup-login">
                        <FontAwesomeIcon className="icon-login" size="1x" icon={faLock} />
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
                <div className="suggest-register">You don't have an account? REGISTER</div>
            </div>
        </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        helloWorld: state.helloWorldReducer.hello,
        access: state.loginReducer.access,
        refresh: state.loginReducer.refresh 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHelloWorldDispatch: () => dispatch(getHelloWorldRequest()),
        postTokenRequest: () => dispatch(postTokenRequest()),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
