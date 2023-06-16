//Four parts to build react native app

//import lib. to create components
import React from "react";
import {StyleSheet, Text, View} from "react-native"
import CustomComponents from "./src/screens/CustomComponents";

//create a component that return some jsx/simple function
const App=()=>{
  const useJs="using js in jsx"
  const useElement=<Text>using my element</Text>

  //for passing functions
  const addingTwo=( a , b)=>{
       return a+b 
  }
  return (
    <View>
    <Text style={styles.textStyle}>Hello text your are a subsitution of p</Text>
    <Text style={styles.jsstyle}>{useJs}</Text>
    <CustomComponents/>
    {useElement}
    <Text>Sum of two number is {addingTwo(5,6)}</Text>
    </View>
  )
}

//create a stylesheet to style the component 
const styles=StyleSheet.create({
  textStyle:{
    margin:100,

    color:"red"
  },
  jsstyle:{
    color:"green"
  }
})

//export the file ,so, that we can use it elsewhere in our app
export default App;