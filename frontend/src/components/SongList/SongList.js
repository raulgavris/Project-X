import React from 'react';
// import LoadingScreen from 'react-loading-screen';
import { connect } from 'react-redux';
import { getSongListRequest, postSongListRequest } from '../../redux';
// import styles from '../../styles/variables.scss';

import './SongList.scss';

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
        const {songList } = this.props
       
        if (this.state.loaded === false) {
            return (
               <div> Page failed to load !!</div>
            )
        }    
        return (
                <div>
                    {/* navbar here
                    {/* {
                        this.props.songList.map(song => 
                            <h2> {song.title} </h2>    
                        )
                    } */}
                    {/* {songList.map(song => <h2>{song.title} </h2>)  } */}
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