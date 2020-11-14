import React from 'react';
import LoadingScreen from 'react-loading-screen';
import { connect } from 'react-redux';

import styles from '../../styles/variables.scss';

import './LandingPage.scss';
import NavigationBar from '../NavigationBar'

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
        };
    }

    componentDidMount() {
        setTimeout(() => { }, 500);
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
                <NavigationBar />
                <div className="header">
                    Connecting People Through Music
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    
};

const mapDispatchToProps = dispatch => {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
