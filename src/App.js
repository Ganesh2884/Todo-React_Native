import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Login from './Components/Login'


export default function App() {
  return (
    <View style={styles.container}>
        <Login/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:150 ,
    backgroundColor:'#FFFFFFF'
  },

})
