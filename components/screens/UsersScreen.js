import React from 'react'
import { View} from 'react-native'

// Components
import List from '../List';

export default UsersScreen = ({navigation}) => {
   
    const nextScreen = 'Posts';

    const url = 'https://jsonplaceholder.typicode.com/users';

    return (
        <View>
            <List
                url= {url}
                nextScreen={nextScreen}
                navigation={navigation}
            />
        </View>
    )
}