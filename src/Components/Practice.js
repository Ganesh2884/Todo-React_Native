import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem';

export default function Practice() {
  const [person, setPerson] = useState([
    {name: 'A', key: 1},
    {name: 'B', key: 2},
    {name: 'C', key: 3},
    {name: 'D', key: 4},
    {name: 'E', key: 5},
    {name: 'F', key: 6},
    {name: 'G', key: 7},
    {name: 'H', key: 8},
    {name: 'I', key: 9},
    {name: 'J', key: 10},
    {name: 'K', key: 11},
    {name: 'L', key: 12},
    {name: 'M', key: 13},
    {name: 'N', key: 14},
    {name: 'O', key: 15},
  ]);

  const [todos, setTodos] = useState([
    {title: 'Buy coffee', key: 1},
    {title: 'complete react native assignment', key: 2},
    {title: 'Go to canteen', key: 3},
    {title: 'Complete word', key: 4},
    {title: 'Buy Vegetables', key: 5},
    {title: 'Meet Friend', key: 6},
  ]);
  const pressHandler = id => {
    console.log(id);
    setPerson(prevPerson => {
      return prevPerson.filter(per => per.key != id);
    });
  };
  return (
    <View style={styles.viewContainer}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            style={styles.txt}
            data={todos}
            renderItem={({item}) => (
              <View>
                <TodoItem item={item} pressHandler={pressHandler} />
              </View>
            )}
          />
        </View>
      </View>

      {/* <FlatList
        numColumns={3}
        keyExtractor={item => item.key}
        data={person}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <Text style={styles.txt}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      /> */}
      {/* <ScrollView>
        {person.map(data => (
          <View key={data.key}>
            <Text style={styles.txt}>{data.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    // textAlign: 'centre',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 30,
  },
  txt: {
    fontSize: 130,
  },
  content: {
    padding: 30,
  },
  list: {
    fontSize: 30,
    color: 'blue',
  },
  txt: {
    fontSize: 30,
  },
});
