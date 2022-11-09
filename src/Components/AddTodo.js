import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';r
import {SafeAreaView} from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';

export default function AddTodo({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [newTodoItem, setNewTodoItem] = useState('');

  console.log(title, description, date);
  const submitTodoHandler = e => {
    console.log(e);
    console.log('title', title, description, 'description', 'date', date);
    // let task1;
    // realm.write(() => {
    //   task1 = realm.create('Task', {
    //     _id: 1,
    //     name: title,
    //     description: description,
    //     date: date.format('YYYY-MM-DD'),
    //   });
    //   console.log(`created two tasks: ${task1.name}`);
    // });
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Add title!"
          onChangeText={e => {
            setTitle(e);
          }}
          value={title}
        />
        <TextInput
          style={styles.input}
          placeholder="Add Description!"
          onChangeText={e => {
            setDescription(e);
          }}
          value={description}
        />
        <DatePicker
          style={styles.date}
          date={date}
          textColor={'blue'}
          backgroundColor={'none'}
          onChangeText={e => setDate(e)}
        />
      </View>

      <View style={styles.btns}>
        <Text onPress={() => navigation.goBack()} style={styles.savebtn}>
          Go back
        </Text>
        <Text onPress={e => submitTodoHandler(e)} style={styles.savebtn}>
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
  date: {
    height: 100,
    marginTop: 30,
    width: 290,
    alignItems: 'center',
    marginLeft: 40,
  },
});
