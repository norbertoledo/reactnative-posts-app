import React from 'react'
import { View, Text } from 'react-native'

const PostDetailScreen = ({navigation}) => {
    console.log('ItemPost: ', navigation.getParam('item'));
    const {title, body} = navigation.getParam('item');
    return (
        <View>
            <Text>{title}</Text>
            <Text>{body}</Text>
        </View>
    )
}

export default PostDetailScreen
