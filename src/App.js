import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './Components/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerOptions: false}}>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen
          name="AddTodo"
          options={() => ({
            headerLeft: () => null,
          })}
          component={AddTodo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     marginTop:150 ,
//     backgroundColor:'#FFFFFFF'
//   },

// })
