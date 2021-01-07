import React from 'react';
import './NavigationBar.scss';
import { Link } from 'react-router-dom';

import logo from './assets/Logo.png';


class NavigationBar extends React.Component {

    componentDidMount(){
    }

    render(){
        return (
        <nav className="navigation-bar">
            <div className="logo"><Link to='/'> <img src={logo} alt="Logo" /></Link></div>
            <ul className="ul-links-wrapper">
                <li className="li-links-wrapper"><Link to='/'>HOME</Link></li>
                {/* <li className="li-links-wrapper"><Link to='/song_list'>CONNECT</Link></li> */}
                {/* <li className="li-links-wrapper"><Link to='/about'>ABOUT</Link></li> */}
                <li className="li-links-wrapper"><Link to='/login'>LOG IN</Link></li>
                <li className="li-links-wrapper"><Link to='/register'>REGISTER</Link></li>
            </ul>
        </nav>
        )};
};

export default NavigationBar;