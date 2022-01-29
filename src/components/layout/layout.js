import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import { width, height, colors, sizes } from '../../assets/colors';

export default (props) => {
    console.log('scrolling :',props.scrolling);

    return (
        <View style={styles.container}>
            {props.scrolling === true ?
                <ScrollView style={{ flex: 1 }}>
                    {props.children}
                </ScrollView>
                :
                props.children
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
     
    },
});








