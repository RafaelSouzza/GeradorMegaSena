import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {
  const [list, setList] = useState([]);
  var lists = [];
  function randomNumber() {
    while(lists.length <6){
      var aleatorio = Math.round(Math.random() * 60)
      if(lists.includes(aleatorio) ==false && aleatorio != 0){
        lists.push(aleatorio)
      }
      else{
        lists.pop()
      }
    }
    lists.sort((a,b)=>{
      return a-b;
    })
    setList(lists)
    console.log(list)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={randomNumber}>
        <Text style={styles.textButton}>Gerar possiveis números da MegaSena</Text>
      </TouchableOpacity>
      <Text style={styles.numbers}>{list.join('-')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3380FF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  textButton: {
    fontSize: 18,
    color: 'white'
  },
  numbers: {
    fontSize: 28,
    color: '#FF3633',
    padding:5
  }

});
