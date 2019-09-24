import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font';

export default ListItem = ({item, navigation, onPress}) => {

    const [loading, setLoading] = useState(true);

    const title = navigation.state.routeName === "Users" ? item.name : item.title;
    
    const loadFonts = async ()=>{
        await Font.loadAsync({
            'roboto-thin': require('../assets/fonts/Roboto/Roboto-Thin.ttf'),
            'roboto-light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
            'roboto-regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
            'roboto-bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
            'roboto-black': require('../assets/fonts/Roboto/Roboto-Black.ttf')
        })
        setLoading(false);
    }

    useEffect(
        ()=>{
           loadFonts();
        },[]
    )
    if(loading) return null;
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.item}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
        // justifyContent: 'center',
        // alignItems: 'stretch',
        // alignSelf: 'stretch'
    },
    item:{
        flex: 1,
        height: 60,        
        padding: 20,
        // backgroundColor: 'navy',
        // color: 'white',
        fontSize: 18,
        fontFamily: 'roboto-thin'
    } 
});
