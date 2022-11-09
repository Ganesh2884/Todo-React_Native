//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

// create a component
const Card = props => {
  console.log('props', props);
  const data = props.todo;

  return (
    <View style={styles.container}>
      <View style={styles.titledisc}>
        <Text style={styles.title1}>{data.title}</Text>
        <Text style={styles.disc}>{data.description}</Text>
      </View>
      <Text style={styles.datee}>{data.date}</Text>
    </View>
    // <View>
    //   {/* <View>
    //     <Text>{data.title}</Text>
    //     <Text>{data.description}</Text>
    //   </View> */}
    //   <Text>{data.date}</Text>
    // </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 40,
    borderRadius: 15,
  },

  titledisc: {
    position: 'absolute',
    left: 20,
  },

  datee: {
    position: 'absolute',
    right: 30,
  },

  title1: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  disc: {
    fontSize: 20,
  },
});

//make this component available to the app
export default Card;
