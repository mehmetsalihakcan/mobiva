
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
    console.log('post :',post);

    return (
        <View style={styles.container}>
          <View style={styles.webviewContainer}>
       
      </View>
        </View>
    );
};

/*
 <WebView
          style={styles.webview}
          source={{ uri: 'https://reactnative.dev/' }}
          onLoadEnd={() => helper.hideSpinner()}
          onLoadStart={() => helper.showSpinner()}
          onError={() =>
            Alert.alert('Hata Oluştu!', 'Dekont indirilirken hata oluştu.', [
              { text: 'Tamam', onPress: () => console.log('') },
            ])
          }
  />
*/

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor: colors.white
    },
    text:{
        fontSize:sizes.h3,
        padding:10
    },
    webview:{
        flex:1,
        
    }
});

export default ProductDetail;
