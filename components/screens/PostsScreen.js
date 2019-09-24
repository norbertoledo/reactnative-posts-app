import React, {useEffect} from 'react'
import { View} from 'react-native'

// Components
import List from '../List';

export default PostsScreen = ({navigation}) => {

    const {id, name} = navigation.getParam('item');
    
    const nextScreen = 'Detail';
    
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;


    useEffect(
        ()=>{
            const userName = name;
            navigation.setParams({'title': `${userName}`})
        },[]
    );

    return(
 
        <View>
            <List
                url= {url}
                nextScreen={nextScreen}
                navigation={navigation}
            />
        </View>

)
}
