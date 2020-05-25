import React from 'react';
import {Button, StyleSheet, Text, View, Platform} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import AuthScreen from './screeens/AuthScreen';
import WelcomeScreen from './screeens/WeclcomeScreen';
import MapScreen from "./screeens/MapScreen";
import DeckScreen from "./screeens/DeckScreen";
import ReviewScreen from "./screeens/ReviewScreen";
import SettingsScreen from "./screeens/SettingsScreen";
import {navigationRef} from './RootNavigation';
import * as RootNavigation from './RootNavigation.js';

export default function App() {

    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    const Review = () => (
        <Stack.Navigator>
            <Stack.Screen name="Review"
                          component={ReviewScreen}
                          options={() => ({
                              headerTitle: 'Review Jobs',
                              headerRight: () =>
                                  (<Button title="Settings"
                                           backgroundColor='rgba(0,0,0,0)'
                                           color='rgba(0,122,255,1)'
                                           onPress={() => {
                                               RootNavigation.navigate('Settings')
                                           }}/>),
                              style: {
                                  marginTop: Platform.OS === 'android' ? 24 : 0
                              }
                          })}
            />
            <Stack.Screen name="Settings" component={SettingsScreen}/>
        </Stack.Navigator>
    );

    const Main = () => (
        <Tab.Navigator>
            <Tab.Screen name="Map" component={MapScreen}/>
            <Tab.Screen name="Deck" component={DeckScreen}/>
            <Stack.Screen name='Review' component={Review}/>
        </Tab.Navigator>
    );


    return (
        <NavigationContainer ref={navigationRef}>
            <Tab.Navigator>
                <Tab.Screen name="Welcome" component={WelcomeScreen}/>
                <Tab.Screen name="Auth" component={AuthScreen}/>
                <Tab.Screen name='Main' component={Main}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
