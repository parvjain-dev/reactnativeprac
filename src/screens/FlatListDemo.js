import React from 'react'
import { View, StyleSheet, FlatList,Text } from 'react-native'
const FlatListDemo = () => {
    const names = [{
        key:"1",
        name: "parv"
    },
    {
        key:"2",
        name: "raghav"
    },
    {
        key:"3",
        name: "aryan"
    },
    {
        key:"4",
        name: "vishit"
    },
    {
        key:"5",
        name: "ram"
    },
    {
        key:"6",
        name: "seeta"
    }
]
    return (
        <FlatList
        style={styles.liststyle}
        //horzontal is for horizontal scroll
        horizontal
        inverted
        showsHorizontalScrollIndicator={false}
       // numColumns={2}
         data={names} 
         renderItem={(elements)=>{
                return(
                    // console.log(elements.item.name)
                    <Text style={styles.textStyle}> {elements.item.name}</Text>
                ) 
        }}   />
    )
}
const styles = StyleSheet.create({
     liststyle:{
        textAlign:"center",
        margin:20,
        padding:10

     },
     textStyle:{
        fontSize:40,
        padding:30,
        height:100,
        backgroundColor:"blue",
        margin:20,
        color:"white"
         }
})
export default FlatListDemo


//flatlist use when we want to use array to object(API)
//to access particular object from array we can use (key should be string)