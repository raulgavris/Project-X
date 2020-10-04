import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { SignIn, CreateAccount, Search, Details, Search2, Profile, Splash } from './src/Screens';
import Home from './src/Home';

import { Provider } from 'react-redux';

import store from './src/redux/store';

const AuthStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen =  () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home} />
    <HomeStack.Screen name='Details' component={Details} options={({route}) => ({
      title: route.params.name
    })}/>
  </HomeStack.Navigator>
);

const SearchStackScreen =  () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name='Search' component={Search} />
    <SearchStack.Screen name='Search2' component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='Profile' component={Profile} />
  </ProfileStack.Navigator>
);

const BottomTabsScreen = () => (
  <BottomTabs.Navigator>
    <BottomTabs.Screen name='Home' component={HomeStackScreen} />
    <BottomTabs.Screen name='Search' component={SearchStackScreen} />
  </BottomTabs.Navigator>
);

const TopTabsScreen = () => (
  <TopTab.Navigator>
    <TopTab.Screen name="Home2" component={HomeStackScreen} />
    <TopTab.Screen name="Search2" component={SearchStackScreen} />
  </TopTab.Navigator>
);

const Drawer = createDrawerNavigator();

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name='Home' component={BottomTabsScreen} />
            <Drawer.Screen name='Profile' component={ProfileStackScreen} />
            <Drawer.Screen name='Home2' component={TopTabsScreen} />
          </Drawer.Navigator>
          {/* <AuthStack.Navigator>
            <AuthStack.Screen name='SignIn' component={SignIn} options={{title: 'Sign In'}} />
            <AuthStack.Screen name='CreateAccount' component={CreateAccount} options={{title: 'Create Account'}} />
          </AuthStack.Navigator> */}
        </NavigationContainer>
      </Provider>
    );
  };
}

export default App;
