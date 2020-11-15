import React from 'react';
import './NavigationBar.scss';
import { Link } from 'react-router-dom';


class NavigationBar extends React.Component {

    componentDidMount(){
    }

    render(){
        return (
        <navbar className="navigation-bar">
            <div className="logo">Logo</div>
            <ul className="ul-links-wrapper">
                <li className="li-links-wrapper"><Link to='/'>HOME</Link></li>
                {/* <li className="li-links-wrapper"><Link to='/song_list'>CONNECT</Link></li> */}
                {/* <li className="li-links-wrapper"><Link to='/about'>ABOUT</Link></li> */}
                <li className="li-links-wrapper"><Link to='/login'>LOGIN</Link></li>
                <li className="li-links-wrapper"><Link to='/register'>REGISTER</Link></li>
            </ul>
        </navbar>
        )};
};

export default NavigationBar;