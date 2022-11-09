import {useIsFocused} from '@react-navigation/native';
import Card from './Card';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import idGenerator from './AddTodo';

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
  console.log(id, 'fvgbhnj');
  if (!id) id = 0;
  return id + 1;
};

async function writeData(data) {
  let realm = await Realm.open({
    path: 'myrealm',
    schema: [TaskSchema],
  });

  return realm.objects('Task1');
  // try {
  //   data._id = idGenerator(realm);
  //   realm.write(() => {
  //     realm.deleteAll();
  //     todo = realm.create('Task1', data);
  //   });
  // } catch (e) {
  //   console.log(e);
  // }

  // console.log('my data is ' + realm.objects('Task1'));
}

const fetchData = async data => {
  //let storedData = await writeData(data);
  const newData = storedData.map(data => {
    return {...data, date: data.date.toString()};
  });
  setData(storedData);
};

export default function TodoList({navigation}, props) {
  const [data, setData] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  return (
    <View>
      <Text style={styles.formText}>Hello Ganesh</Text>
      <View>
        <Text
          style={styles.addTodobtn}
          onPress={() => {
            navigation.navigate('AddTodo');
          }}>
          +
        </Text>

        <View>
          <View style={styles.listView}>
            <View>
              <Text>Todos</Text>
              {data && data.length ? (
                <ScrollView>
                  {data.map((todo, index) => {
                    return <Card key={index} todo={todo} />;
                  })}
                </ScrollView>
              ) : (
                <Text style={styles.displayTxt}>Nothing To display</Text>
              )}
            </View>
          </View>
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
    color: 'white',
    fontSize: 50,
    backgroundColor: 'blue',
    borderRadius: 180,
    position: 'absolute',
    bottom: -20,
    right: 10,
    zIndex: 2,
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
  container: {
    padding: 50,
    alignContent: 'center',
    alignItems: 'center',
  },
  item: {
    // padding: 20,
    // fontSize: 15,
    // marginTop: 5,
  },
  // tododoingdoneView: {
  //   flexDirection: 'row',
  //   alignItems: 'flex-end',
  //   backgroundColor: 'white',
  //   padding: 20,
  //   width: '85%',
  //   borderRadius: 18,

  //   shadowColor: '#000',
  //   marginRight: 90,
  // },
  // tododoingdoneViewtext: {
  //   fontSize: 20,
  //   marginHorizontal: 20,
  // },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  displayTxt: {
    color: 'black',
    flex: 1,
  },
});
