import React from 'react';
import {View, Text} from 'react-native';
import Slides from "../components/slides";

const SLIDE_DATA = [
    {text: 'Welcome to JobApp', color: '#03A9F4'},
    {text: 'Use this to get a job', color: '#009688'},
    {text: 'Set your location, the swipe away', color: '#03A9F4'}

];

function WelcomeScreen({navigation}) {

    const onSlidesComplete = () => {
        navigation.navigate('Auth');
    };


    return (<Slides data={SLIDE_DATA}
                    onComplete={onSlidesComplete}/>);
}

export default WelcomeScreen;