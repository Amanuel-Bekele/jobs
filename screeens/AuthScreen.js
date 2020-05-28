import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import * as actions from "../actions";
import PropTypes from 'prop-types';

function AuthScreen ({ facebookLogin, navigation, token }) {

  useEffect(() => {

    facebookLogin();

  }, []);

  useEffect(() => onAuthComplete(), [token]);

  const onAuthComplete = () => {

    if (token)
      navigation.navigate('Main', { screen: 'Map' });

  };

  return <View/>;

}

AuthScreen.propTypes = {
  facebookLogin: PropTypes.func,
  navigation: PropTypes.object,
  token: PropTypes.string
};
const mapStateToProps = ({ auth }) => ({ token: auth.token });


export default connect(mapStateToProps, actions)(AuthScreen);
