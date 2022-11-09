import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';r
import {SafeAreaView} from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import Realm from 'realm';
import {useIsFocused} from '@react-navigation/native';

export default function AddTodo({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const [realmStorage, setRealmStorage] = React.useState(null);
  const [tasks, setTasks] = React.useState([]);
  const TaskSchema = {
    name: 'Task1',
    properties: {
      _id: 'int',
      title: 'string',
      description: 'string?',
      date: 'date',
    },
    primaryKey: '_id',
  };

  const idGenerator = async realmId => {
    const realm = await Realm.open({
      path: 'myrealm',
      schema: [TaskSchema],
    });
    let id = realm.objects('Task1').max('_id');
    console.log(id);
    if (!id) id = 0;
    return id + 1;
  };

  async function writeData(data) {
    const realm = await Realm.open({
      path: 'myrealm',
      schema: [TaskSchema],
    });
    try {
      data._id = idGenerator(realm);
      realm.write(() => {
        realm.deleteAll();
        todo = realm.create('Task1', data);
      });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async () => {
      // initialize realm...
      const realm = await Realm.open({
        path: 'myrealm',
        schema: [TaskSchema],
      });

      const data = realm.objects('Task1');
      return data;
    };
  });

  const submitTodoHandler = async e => {
    const realm = await Realm.open({
      path: 'myrealm',
      schema: [TaskSchema],
    });
    realm.write(() => {
      task1 = realm.create('Task1', {
        _id: Date.now(),
        title,
        description: description,
        date,
      });
    });
    console.log(title, description, date);
    setTitle('');
    setDescription('');

    // useIsFocused()
    // setText('');
    // setStatus('');
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
