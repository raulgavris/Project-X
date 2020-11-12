import React from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import { connect } from 'react-redux';

import { getHelloWorldRequest, postHelloWorldRequest } from '../../redux';

import Register from '../Register';
import Login from '../Login';


import styles from '../../styles/variables.scss';

import './LandingPage.scss';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            shouldRender: '',
        };
    }

    componentDidMount() {
        this.props.getHelloWorldDispatch();
        setTimeout(() => {
            this.setState({
                loaded: this.props.loaded,
                count: this.props.helloWorld.count,
                shouldRender: '',
            })
        }, 500);
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
            <div className="landing-page">
                <navbar className="navigation-bar">
                    <div className="logo">Logo</div>
                    <ul className="ul-links-wrapper">
                        <li className="li-links-wrapper"><Link to='/download'>DOWNLOAD</Link></li>
                        <li className="li-links-wrapper"><Link to='/about'>ABOUT</Link></li>
                        <li className="li-links-wrapper"><Link onClick={()=>{
                            this.setState({
                                shouldRender: 'register'
                            })
                        }}>REGISTER</Link></li>
                        <li className="li-links-wrapper"><Link onClick={()=>{
                            this.setState({
                                shouldRender: 'login'
                            })
                        }}>LOG IN</Link></li>
                    </ul>
                </navbar>

                <div className="header">
                    Connecting People Through Music
                    {this.state.shouldRender === 'login' &&
                        <Login />
                    }
                    {this.state.shouldRender === 'register' &&
                        <Register />
                    }
                </div>

                
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        helloWorld: state.helloWorldReducer.hello[0],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHelloWorldDispatch: () => dispatch(getHelloWorldRequest()),
        postHelloWorldDispatch: (payload) => dispatch(postHelloWorldRequest(payload)),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
