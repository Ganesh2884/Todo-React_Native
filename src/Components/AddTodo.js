import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';r
import {SafeAreaView} from 'react-native-safe-area-context';

export default function AddTodo({navigation}) {
  const [todos, setTodos] = useState('');
  const [newTodoItem, setNewTodoItem] = useState('');

  const submitTodoHandler = async e => {
    let task1;
    realm.write(() => {
      task1 = realm.create('Task', {
        _id: 1,
        name: todos,
      });
      console.log(`created two tasks: ${task1.name}`);
    });
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Add an item!"
          onChangeText={newText => {
            setTodos(newText);
          }}
          value={todos}
        />
      </View>

      <View style={styles.btns}>
        <Text onPress={() => navigation.goBack()} style={styles.savebtn}>
          Go back
        </Text>
        <Text onPress={submitTodoHandler} style={styles.savebtn}>
          Save
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopStartRadius: 0,
  },
  btns: {
    flex: -1,
    flexDirection: 'row', // inner items will be added vertically
    flexGrow: 3, // all the available vertical space will be occupied by it
    justifyContent: 'flex-end',
  },
  savebtn: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 60,
    marginTop: 50,
    backgroundColor: 'blue',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});
