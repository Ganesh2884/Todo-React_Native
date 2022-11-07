import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AddTodo from './AddTodo';


export default function TodoList({navigation, props}) {
  const users = [
    {
      user: 'Ganesh',
    },
    {
      title: 'Hello 1',
      description: 'This is hello 1 desc',
    },
    {
      title: 'Hello 2',
      description: 'This is hello 2 desc',
    },
    {
      title: 'Hello 3',
      description: 'This is hello 3 desc',
    },
    {
      title: 'Hello 4',
      description: 'This is hello 4 desc',
    },
  ];
  return (
    <View>
      <View style={styles.homeForm}>
        <Text style={styles.formText}>Hello {users[0].user}</Text>
        <View>
          <TouchableNativeFeedback>
            <View>
              <Text
                style={styles.addTodobtn}
                onPress={() => {
                  navigation.navigate('AddTodo');
                }}>
                +
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View>{/* <AddTodo taskList={taskList}/> */}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  homeForm: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'centre',
    alignItems: 'center',
  },

  formText: {
    fontSize: 30,
    Color: 'black',
    fontWeight: 'bold',
  },

  addTodobtn: {
    color: 'blue',
    fontSize: 60,
  },

  listItems: {
    backgroundColor: '#fff',
    width: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    height: '30%',
  },

  bar: {
    backgroundColor: 'dodgerblue',
  },
});
