import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import AddTodo from './AddTodo';

export default function TodoList({navigation}, props) {
  const persons = [
    {
      user: 'Ganesh',
    },
    {
      id: '1',
      name: 'Earnest Green',
    },
    {
      id: '2',
      name: 'Winston Orn',
    },
    {
      id: '3',
      name: 'Carlton Collins',
    },
    {
      id: '4',
      name: 'Malcolm Labadie',
    },
    {
      id: '5',
      name: 'Michelle Dare',
    },
  ];

  return (
    <View>
      <View style={styles.homeForm}>
        <Text style={styles.formText}>Hello {persons[0].user}</Text>
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

          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View>
                {persons.map(person => {
                  return (
                    <View>
                      <Text style={styles.item}>{person.name}</Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>

          {/* <View>
            <View style={styles.tododoingdoneView}>
              <Text style={[styles.tododoingdoneViewtext]}>ToDo</Text>
              <Text style={styles.tododoingdoneViewtext}>In Progress</Text>
              <Text style={styles.tododoingdoneViewtext}>Done</Text>
            </View>
          </View> */}
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
    marginLeft: 130,
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
});
