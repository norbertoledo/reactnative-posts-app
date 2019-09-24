import React, {useState, useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'

// Components
import ListItem from './ListItem';

export default List = ({navigation, url, nextScreen}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = ()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data);
            setLoading(false);
            }
        )
        .catch(error=>console.log);
    }

    useEffect(
        ()=>{
            setLoading(true);
            getData();
        },[]
    );


    return (
        <View>
            {loading
            ? 
                <Text>LOADING...</Text>
            :
                <FlatList
                    data={data}
                    renderItem={
                        ({item})=>
                            <ListItem 
                                item={item} 
                                navigation={navigation}
                                onPress={ 
                                    ()=> navigation.navigate(
                                            nextScreen,
                                            {item: item}
                                        ) 
                                }
                            />
                    }
                    keyExtractor={ item => String(item.id)}
                />
            }
        </View>
    )
}

