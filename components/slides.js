import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {Button} from 'react-native-elements'
import PropTypes from 'prop-types';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

    renderSlides() {
        return this.props.data.map((slide, index, arr) => {
            return <View style={[styles.slideStyle, {backgroundColor: slide.color}]} key={slide.text}>
                <Text style={styles.textStyle}>{slide.text}</Text>
                {arr.length - 1 === index ? <Button
                    title="Go to Auth"
                    raised
                    onPress={() => this.props.onComplete()}
                    buttonStyle={styles.buttonStyle}
                /> : null}
            </View>

        })
    }

    render() {
        return (
            <ScrollView
                horizontal
                style={{flex: 1}}
                pagingEnabled
            >
                {this.renderSlides(this.props.data)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    },
    buttonStyle: {
        backgroundColor: '#02AAD1',
        marginTop: 15
    }

});
Slides.propTypes = {
    onComplete: PropTypes.func
};
export default Slides;
