import React from 'react';
// import LoadingScreen from 'react-loading-screen';
import { connect } from 'react-redux';
import { getSongListRequest, postSongListRequest } from '../../redux';
// import styles from '../../styles/variables.scss';
import {Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './SongList.scss';
import NavigationBar from '../NavigationBar';

class SongList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
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
                <div>
                <NavigationBar />
                <h1> Connect with someone </h1>
                    <Container className="song_list_container">
                        <Row class_name="header_row">
                            <Col class_name = "header_col">Name</Col>
                            <Col class_name = "header_col" > Song </Col> 
                            <Col class_name = "header_col">Location</Col> 
                        </Row>
                        
                        {this.props.songList.map(song => 
                            <Row class_name="song_row"> 
                                <Col class_name = "song_col">{song.user_name}</Col>
                                <Col class_name = "song_col" >{song.title} - {song.artist}</Col> 
                                <Col class_name = "song_col">{song.user_location}</Col>    
                            </Row>) }   
                    </Container>
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