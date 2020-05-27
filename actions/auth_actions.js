import {FACEBOOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS} from './types';
import AsyncStorage from '@react-native-community/async-storage';
import * as Facebook from 'expo-facebook';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
    } else {
        doFacebookLogin(dispatch);
    }
};
const doFacebookLogin = async dispatch => {
    Facebook.initializeAsync();

    let {token, type} = await Facebook.logInWithReadPermissionsAsync( {
        permissions: ['public_profile']
    });
    if (type === 'cancel') {
        return dispatch({type: FACEBOOK_LOGIN_FAIL})
    }
    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token})

};
