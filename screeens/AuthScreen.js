import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from "react-redux";
import * as actions from "../actions";

function AuthScreen(props) {
    useEffect(() => props.facebookLogin(), []);

    return (<View>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
    </View>);
}

export default connect(null, actions)(AuthScreen);
