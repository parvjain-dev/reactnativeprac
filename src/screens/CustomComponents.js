//Four parts to build react native app

//import lib. to create components
import React from "react";
import {StyleSheet, Text} from "react-native"


//create a component that return some jsx/simple function
const CustomComponents=()=>{
  return (
    <Text style={styles.textStyle}>I am custom component</Text>
  )
}

//create a stylesheet to style the component 
const styles=StyleSheet.create({
  textStyle:{

    color:"blue"
  }
})

//export the file ,so, that we can use it elsewhere in our app
export default CustomComponents;