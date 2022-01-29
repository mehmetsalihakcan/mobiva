import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider, Text } from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// redux actions
import { useSelector, useDispatch } from 'react-redux';
import { getReddits } from '../../modules/home/actions';
import { width, height, colors, sizes } from '../../assets/colors';

export default (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const home = useSelector(state => state.home);

  const [statusBarHeight, setStatusBarHeight] = useState(getStatusBarHeight());
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRedditData();
  }, []);

  const getRedditData = async () => {
    const result = await getReddits();
    console.log('service result : ', result);
    setData(result);
  }

  const renderItem = ({ item, index }) => {

    return <TouchableOpacity
      onPress={() => navigation.navigate('PostDetail', { postInfo: item })}
      style={{ flex: 1, backgroundColor: index % 2 === 0 ? colors.lightGray : colors.white,marginVertical:20 }} >
      <View style={styles.renderItem} >
        <View style={styles.imageContainer} >
          <Image
            style={styles.image}
            source={{
              uri: item.static_icon_url && item.static_icon_url
            }}
          />
        </View>

        <View style={styles.renderContent} >

          <View style={styles.dateContainer} >
            <Text>{item.end_date}</Text>
          </View>

          <View style={styles.nameContainer} >
            <Text>{item.name}</Text>
          </View>

          <View style={styles.authorContainer} >
            <View style={styles.author} >
              <Text>author</Text>
            </View>
            <View style={styles.scoreContainer} >
              <Text>score</Text>
            </View>
            <View style={styles.descriptionContainer} >
              <Text numberOfLines={1} >{item.description}</Text>
            </View>
          </View>

        </View>
      </View>
      <Divider />
    </TouchableOpacity>
  }


  const getMorePost = () => {

    //setLoading(true);
    setPage(page => page + 1);
  }

  const footerIndicator = () => {
    return loading ? (
      <View style={{
        paddingVertical: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
      }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    ) : null
  };


  return (
    <View style={styles.container}>

      <FlatList data={data.length > 0 ? data[page].all_awardings : []}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={{ flex: 1 }}
        onEndReached={getMorePost}
        ListFooterComponent={footerIndicator}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  renderItem: { flex: 1, height: '30%', flexDirection: 'row', width: '100%' },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: '100%',

  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    width: 24,
    height: 24
  },
  renderContent: { flexDirection: 'column', width: '80%', height: '30%' },
  dateContainer: { flex: 1, alignItems: 'flex-end', paddingRight: 10, height: '10%' },
  nameContainer: { flex: 2, alignItems: 'center', justifyContent: 'center', height: '20%' },
  authorContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: '10%' },
  author: { flex: 1, },
  scoreContainer: { flex: 1 },
  descriptionContainer: { flex: 1, }
});


