// import React from 'react'
// import { View, Text } from 'react-native';

// Stack Navigation
import { createStackNavigator } from 'react-navigation-stack';

// Screens Component
import UsersScreen from './screens/UsersScreen';
import PostsScreen from './screens/PostsScreen';
import PostDetailScreen from './screens/PostDetailScreen';


// NavigationOptions
UsersScreen.navigationOptions = ( {navigation} ) => {
    return{
        title: 'Users',
    }
}

PostsScreen.navigationOptions = ( {navigation} ) => {
    return{
        title: navigation.getParam('title', 'Posts'),
    }
}

PostDetailScreen.navigationOptions = ( {navigation} ) => {
    return{
        title: 'Post',
    }
}


// StackNavigator
export default AppNavigator = createStackNavigator(
    {
        Users: {
            screen: UsersScreen
        },
        Posts: {
            screen: PostsScreen
        },
        Detail: {
            screen: PostDetailScreen
        }
    },
    {
        initialRouteName: 'Users'
    }
);
