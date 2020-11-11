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
                        <Label for="username" className="label-register">Username</Label>
                        <FontAwesomeIcon className="icon-register" size="1x" icon={faUser} />
                        <Input
                            className="input-register"
                            type="password"
                            name="username"
                            placeholder="username"
                            maxLength={20}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="formgroup-register">
                        <Label for="password" className="label-register">Password</Label>
                        <FontAwesomeIcon className="icon-register" size="1x" icon={faLock} />
                        <Input
                            className="input-register"
                            type="password"
                            name="password"
                            placeholder="password"
                            maxLength={20}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="formgroup-register">
                        <Label for="firstname" className="label-register">First Name</Label>
                        <FontAwesomeIcon className="icon-register" size="1x" icon={faLock} />
                        <Input
                            className="input-register"
                            type="password"
                            name="firstname"
                            placeholder="firstname"
                            maxLength={20}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="formgroup-register">
                        <Label for="lastname" className="label-register">Last Name</Label>
                        <FontAwesomeIcon className="icon-register" size="1x" icon={faLock} />
                        <Input
                            className="input-register"
                            type="password"
                            name="lastname"
                            placeholder="lastname"
                            maxLength={20}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button className="submit-register" onClick={()=>{
                        this.handleSubmit()
                    }}>REGISTER</Button>
                </Form>
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
