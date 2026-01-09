import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, Alert, TextInput } from 'react-native';


export default function RootLayout() {
  const [text, setText] = useState('');
  const addString = () => {
    const nStr = ' RYTP';
    setText(text + nStr);
  }
  return (
    <View style={[styles.container, { flexDirection: 'column' }]}>
      <Text style={styles.label}>Какой RYTP ты хочеш?7??</Text>
      <TextInput style={styles.txtBox} value={text} onChangeText={setText}></TextInput>
      <View style={styles.button}>
        <Button title='Применить' onPress={addString} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'darkslategray'
  },
  label: {
    marginTop: 360,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    margin: 'auto',
    color: 'white'
  },
  button: {
    flex: 3,
    margin: 'auto',
    marginTop: 10
  },
  txtBox: {
    flex: 0,
    width: 320,
    margin: 'auto',
    backgroundColor: 'darkgray',
    color: 'white'
  }
});