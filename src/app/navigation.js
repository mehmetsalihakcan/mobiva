
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home';
import PostDetail from '../screens/home/postDetail';
import SettingsScreen from '../screens/settings';

const HomeStack = createNativeStackNavigator();

const homeStackContainer = () => {

    return (<HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Anasayfa', headerShown: true }} />
        <HomeStack.Screen name="PostDetail" component={PostDetail} options={{ title: 'Post Detay',headerBackTitleVisible: false, }} />
        <HomeStack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Ayarlar',headerBackTitleVisible: false, }} />
       
    </HomeStack.Navigator>)
}

export default () => {
    return (
        <NavigationContainer>
            {homeStackContainer()}
        </NavigationContainer>
    );
}
