
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { width, height, colors, sizes } from '../../assets/colors';
import WebView from 'react-native-webview';

const ProductDetail = (props) => {
    const post = props && props.route.params.postInfo;
    //const postImageUrl='https://www.redditstatic.com/gold/awards/icon/silver_512.png';
    const reactDevUrl='https://reactnative.dev/'; //post.static_icon_url

    console.log('post :', post);

    return (
        <View style={styles.container} >
            <WebView
                style={styles.webview}
                source={{ uri: reactDevUrl  }}
                onLoad={() => console.log('Yükleme devam ediyor...')}
                onLoadStart={() => console.log('Yükleme başladı.')}
                onLoadEnd={() => console.log('Yükleme bitti.')}
                onError={() =>
                    Alert.alert('Hata Oluştu!', 'Dekont indirilirken hata oluştu.', [
                        { text: 'Tamam', onPress: () => console.log('') },
                    ])
                }
            />
        </View>
    );
};

/*

*/

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        fontSize: sizes.h3,
        padding: 10
    },
    webview: {
        flex: 1,

    }
});

export default ProductDetail;
