import React from 'react';

import { connect } from 'react-redux';
import { getSongListRequest, postSongListRequest } from '../../redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import './SongList.scss';
import logo from './assets/Logo.png';
// import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss';
// import NavigationBar from '../NavigationBar';


class SongList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            searchKey: '',
            songList: [ ],
            user_first_name: '',
            user_last_name: '',
            user_email: '',
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({searchKey : event.target.value.toLowerCase()});
    }

    componentDidMount() {
        this.props.getSongListDispatch();
        setTimeout(() => {
            this.setState({
                loaded: this.props.loaded,
                user_first_name: sessionStorage.getItem('first_name'),
                user_last_name: sessionStorage.getItem('last_name'),
                user_email: sessionStorage.getItem('email'),
            })
        }, 500);
    }

    render() {    
       
        const songs = this.props.songList
        
        if (this.state.loaded === false) {
            return (
               <div> Page failed to load !!</div>
            )
        }
        return (
            <div className = "song-list">
                <div></div>
                <nav className="navigation-bar">
                    <div className="logo"><Link to='/'> <img src={logo} alt="Logo" /></Link></div>
                    <ul className="ul-links-wrapper">
                        <li className="li-links-wrapper"><Link to='/'>HOME</Link></li>
                        <li className="li-links-wrapper"><Link to='/song_list'>CONNECT</Link></li>
                        {/* <li className="li-links-wrapper"><Link to='/about'>ABOUT</Link></li> */}
                        {/* <li className="li-links-wrapper"><Link to='/login'>LOGIN</Link></li> */}
                        <li className="li-links-wrapper"><Link to='/'>LOG OUT</Link></li>
                        <li className="li-links-wrapper">{this.state.user_last_name} {this.state.user_first_name}</li>
                    </ul>
                </nav>
                <div className="song_list_header"> Connect with someone... </div>
                <div className="song-list-wrapper">
                    <Container className="song_list_container">
                        <Row className="header_row">
                            <Col  className = "header_col">User Name</Col>
                            <Col  className = "header_col">Song</Col>
                            <Col  className = "header_col">Artist</Col>
                            <Col  className = "header_col">Location</Col>
                        </Row>
                        
                        {songs.filter(song => song.title.toLowerCase().includes(this.state.searchKey) ||song.artist.toLowerCase().includes(this.state.searchKey) ||
                                                song.user_name.toLowerCase().includes(this.state.searchKey) ||
                                                song.user_location.toLowerCase().includes(this.state.searchKey) )
                                .map(song =>
                                    <Row className="song_row">
                                        <Col  className = "song_col">{song.user_name}</Col>
                                        <Col  className = "song_col" >{song.title}</Col>
                                        <Col className = "song_col" >{song.artist} </Col>
                                        <Col className = "song_col">{song.user_location}</Col>
                                    </Row>) }
                    </Container>
                
                </div>
                <div className="search_bar_wrapper">
                    
                    <input className="search" type = "text" placeholder ="Search..."value = {this.state.searchKey} onChange={this.handleChange}></input>
                 
                </div> 
            </div>
                
        );


    };

}


const mapStateToProps = state => {
    return {
        songList : Object.values(state.songListReducer.song_list_get)
     
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getSongListDispatch: () => dispatch(getSongListRequest()),
        postSongListDispatch: (payload) => dispatch(postSongListRequest(payload)),
        dispatch
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SongList);