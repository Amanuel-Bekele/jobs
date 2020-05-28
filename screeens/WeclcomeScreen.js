import React, { useEffect, useState } from 'react';
import Slides from "../components/slides";
import _ from 'lodash';
import { AppLoading } from "expo";
import { PropTypes } from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, the swipe away', color: '#03A9F4' }

];

function WelcomeScreen ({ navigation }) {

  const [token, setToken] = useState(null);

  useEffect(() => {

    const fetchToken = async () => {

      let token = await AsyncStorage.getItem('fb_token');
      if (token) {

        navigation.navigate('Main', { screen: 'Map' });
        setToken(token);

      } else setToken(false);

    };
    fetchToken();

  }, []);


  const onSlidesComplete = () => {

    navigation.navigate('Auth');

  };

  if (_.isNull(token)) return <AppLoading/>;
  return <Slides data={SLIDE_DATA}
    onComplete={onSlidesComplete}/>;

}

WelcomeScreen.propTypes = {
  navigation: PropTypes.object
};
export default WelcomeScreen;
