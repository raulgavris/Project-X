<<<<<<< Updated upstream
import React from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import { connect } from 'react-redux';

import { getHelloWorldRequest, postHelloWorldRequest } from '../../redux';

import styles from '../../styles/variables.scss';

import './HelloWorld.scss';


class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            count: '',
        };
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

    handleSubmit() {
        let id = this.props.helloWorld.id;
        this.props.helloWorld.count += 1;
        let count = this.props.helloWorld.count;
        this.props.postHelloWorldDispatch({id: id, count: count});
        this.setState({count: count})
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
            <div>
                <h1>Hello {this.props.helloWorld.hello}!</h1>
                <h1>You have {this.props.helloWorld.count} likes!</h1>
                <button onClick={()=>{
                    this.handleSubmit();
                }}>Increase likes!</button>
                <Link to="/">To landing page!</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
=======
import React from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import { connect } from 'react-redux';

import { getHelloWorldRequest, postHelloWorldRequest } from '../../redux';

import styles from '../../styles/variables.scss';

import './HelloWorld.scss';


class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            count: '',
        };
    }

    componentDidMount() {
        this.props.getHelloWorldDispatch();
        setTimeout(() => {
            console.log(this.props)
            this.setState({
                loaded: this.props.loaded,
                count: this.props.helloWorld.count,
            })
        }, 500);
    }

    handleSubmit() {
        let id = this.props.helloWorld.id;
        this.props.helloWorld.count += 1;
        let count = this.props.helloWorld.count;
        this.props.postHelloWorldDispatch({id: id, count: count});
        this.setState({count: count})
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
            <div>
                <h1>Hello {this.props.helloWorld.hello}!</h1>
                <h1>You have {this.props.helloWorld.count} likes!</h1>
                <button onClick={()=>{
                    this.handleSubmit();
                }}>Increase likes!</button>
                <Link to="/">To landing page!</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
>>>>>>> Stashed changes
