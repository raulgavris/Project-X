import React from 'react';
import { connect } from 'react-redux';
import { Text, Button } from 'react-native';
import { getHelloWorldRequest, postHelloWorldRequest } from './redux';

import { ScreenContainer, Splash } from './Screens';

class Home extends React.Component {
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
        }, 1000);
    }

    handleSubmit() {
        let id = this.props.helloWorld.id;
        this.props.helloWorld.count += 1;
        let count = this.props.helloWorld.count;
        this.props.postHelloWorldDispatch({id: id, count: count});
        this.setState({count: count})
    }

    render() {   
        if (this.state.loaded === false || ! this.props.helloWorld) {
            return (
                <Splash />
            );
        }
        return (
            <ScreenContainer>
                <Text>Master List Screen</Text>
                <Button title='React Native by Example' onPress={() => this.props.navigation.push('Details', { name: 'React Native by Example' })}>React Native by Example</Button>
                <Button title='React Native by School' onPress={() => this.props.navigation.push('Details', { name: 'React Native by School' })}>React Native by School</Button>
                <Button title='Drawer' onPress={() => this.props.navigation.toggleDrawer()}>Drawer</Button>
                <Text>Hello {this.props.helloWorld.hello}!</Text>
                <Text>You have {this.props.helloWorld.count} likes!</Text>
                <Button title='Increase likes!' onPress={()=>{
                    this.handleSubmit();
                }}>Increase likes!</Button>
            </ScreenContainer>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
