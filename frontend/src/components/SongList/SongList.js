import React from 'react';
// import LoadingScreen from 'react-loading-screen';
import { connect } from 'react-redux';
import { getSongListRequest, postSongListRequest } from '../../redux';
// import styles from '../../styles/variables.scss';
import {Container, Row, Col } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';

import './SongList.scss';
// import NavigationBar from '../NavigationBar';
import logo from './assets/Logo.png';

class SongList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            inputValue: '',
        };

    }

    componentDidMount() {
        this.props.getSongListDispatch();
        setTimeout(() => {
            this.setState({
                loaded: this.props.loaded,
            })
        }, 500);
    }

    
    //I don't really need a submit here.

    render() {
        if (this.state.loaded === false) {
            return (
               <div> Page failed to load !!</div>
            )
        }
        return (
                <div className = "song-list">
                <navbar className="navigation-bar">
                    <div className="logo"><Link to='/'> <img src={logo} alt="Logo" /></Link></div>
                    <ul className="ul-links-wrapper">
                        <li className="li-links-wrapper"><Link to='/'>HOME</Link></li>
                        <li className="li-links-wrapper"><Link to='/song_list'>CONNECT</Link></li>
                        {/* <li className="li-links-wrapper"><Link to='/about'>ABOUT</Link></li> */}
                        {/* <li className="li-links-wrapper"><Link to='/login'>LOGIN</Link></li> */}
                        <li className="li-links-wrapper"><Link to='/'>LOG OUT</Link></li>
                        <li className="li-links-wrapper">Majeri Robert</li>
                    </ul>
                </navbar>
                <div className="song_list_header"> Connect with someone... </div>
                <div className="song-list-wrapper">
                    <Container className="song_list_container">
                        <Row className="header_row">
                            <Col  className = "header_col">User Name</Col>
                            <Col  className = "header_col">Song</Col>
                            <Col  className = "header_col">Artist</Col>
                            <Col  className = "header_col">Location</Col>
                        </Row>

                        {this.props.songList.map(song =>
                           <Row className="song_row">
                                <Col  className = "song_col">{song.user_name}</Col>
                                <Col  className = "song_col" >{song.title}</Col>
                                <Col className = "song_col" >{song.artist} </Col>
                                <Col className = "song_col">{song.user_location}</Col>
                            </Row>) }
                    </Container>
                </div>
                <div className="search_bar_wrapper">
                    
                    <input className="search" type = "text" placeHolder ="Search..."value = {this.props.inputValue}></input>
                 
                   
                    </div> 
                </div>
                
        );


    };

}


const mapStateToProps = state => {
    return {
        songList : state.songListReducer.song_list_get
    };
};

//map dispatch to props
const mapDispatchToProps = dispatch => {
    return {
        getSongListDispatch: () => dispatch(getSongListRequest()),
        postSongListDispatch: (payload) => dispatch(postSongListRequest(payload)),
        dispatch
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SongList);