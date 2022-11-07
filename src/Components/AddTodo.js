import {Button} from '@rneui/base';
import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';

export default function AddTodo({navigation}) {
  const [value, setValue] = useState('');
  // const [taskList, setTaskList] = useState([]);
  const [input, setInput] = useState('');

  // useEffect(() => {
  //   readData();
  // }, []);

  // let STORAGE_KEY = '@todo_input';

  // const saveData = async () => {
  //   try {
  //     await AsyncStorage.setItem(STORAGE_KEY, value)
  //     alert('Data successfully saved')
  //   } catch (e) {
  //     alert('Failed to save the data to the storage')
  //   }

  //   const readData = async () => {
  //     try {
  //       const valueInStorage = await AsyncStorage.getItem(STORAGE_KEY);
  //       if (valueInStorage !== null) {
  //         setInput(valueInStorage);
  //       }
  //     } catch (e) {
  //       alert('Failed to fetch the input from storage');
  //     }
  //   };

  const submitHandler = e => {
    console.log(e);
    // if(!input) return;
    // saveData(value);
    // props.taskList;
  };

  return (
    <View>
      <View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Add Todo"
            placeholderTextColor="#003f5c"
            value={value}
            onChangeText={e => setValue(e)}
          />
        </View>
      </View>
      <View style={styles.btns}>
        <Button onPress={() => navigation.goBack()}>Go back</Button>
        <Button onPress={submitHandler} style={styles.savebtn}>
          Save
        </Button>
      </View>
    </View>
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
    marginRight: 100,
  },
});
