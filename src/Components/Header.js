import {Text, View, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'pink',
    paddingTop: 10,
    paddingBottom: 10,
  },
  Text: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});
