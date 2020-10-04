import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    }
});

export const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const Details = ({route}) => (
    <ScreenContainer>
        <Text>Details Screen</Text>
        {route.params.name && <Text>{route.params.name}</Text>}
    </ScreenContainer>
);

export const Search = ({navigation}) => (
    <ScreenContainer>
        <Text>Search Screen</Text>
        <Button title='Search 2' onPress={() => navigation.push('Search2')}>Search 2</Button>
        <Button title='React native School' onPress={()=>{
            navigation.navigate('Home', {
                screen: 'Details',
                params: { name: 'React Native by School'}
            })
        }}>React native School</Button>
    </ScreenContainer>
);

export const Search2 = () => (
    <ScreenContainer>
        <Text>Search2 Screen</Text>
    </ScreenContainer>
);

export const Splash = () => (
    <ScreenContainer>
        <Text>Loading ...</Text>
    </ScreenContainer>
);

export const Profile = ({navigation}) => {
    return (
        <ScreenContainer>
            <Text>Profile Screen</Text>
            <Button title='Drawer' onPress={() => navigation.toggleDrawer()}>Drawer</Button>
            <Button title='Sign Out' onPress={() => {}}>Sign Out</Button>
        </ScreenContainer>
    );
};

export const SignIn = ({navigation}) => {
    return (
        <ScreenContainer>
            <Text>Sing In Screen</Text>
            <Button title='Sign In' onPress={() => alert('sign in')}>Sign In</Button>
            <Button title='Create Account' onPress={() => navigation.push('CreateAccount')}>Create Account</Button>
        </ScreenContainer>
    );
};

export const CreateAccount = () => {
    return (
        <ScreenContainer>
            <Text>Create Account Screen</Text>
            <Button title='Sign Up' onPress={()=>{}}>Sign Up</Button>
        </ScreenContainer>
    );
};

