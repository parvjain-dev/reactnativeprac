
import React from "react";
import {StyleSheet, Text, View} from "react-native"
import FlatListDemo from "./src/screens/FlatListDemo";

const App=()=>{



  return (
    <View>
    <FlatListDemo/>
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