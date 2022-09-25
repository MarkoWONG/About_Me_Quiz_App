import React, { useState } from 'react';

import { Text, StyleSheet, Image, TouchableOpacity, View, Button} from 'react-native';

export default function Home({ navigation }) {

  const [show_Hide, setShowHide] = useState('flex');

  const [text, setText] = useState('Hide Image');

  const letToggle = () => {

    if (show_Hide === 'flex') {
      setShowHide('none');
      setText('Show Image')
    } else {
      setShowHide('flex');
      setText('Hide Image')
    }
  }

  return (
    <View style={styleSheet.MainContainer}>
      <Text style={styleSheet.stext}> Hello I'm Marko </Text>
      <Image source={require('../assets/pfp.jpg')}
        style={{ width: 250, height: 250, borderRadius: 20, resizeMode: 'contain', display: show_Hide }} />
      <Button onPress={letToggle}
        title={text} />

      <Text style={styleSheet.mtext}>Here is where you can get to know me and what better way to know me than to do a quiz!</Text>
      <TouchableOpacity 
        style={styleSheet.button}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styleSheet.startText}> Start Quiz →</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  stext: {
    color: "black",
    textAlign: 'center',
    fontSize: 20,
    maxWidth: 250,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  mtext: {
    color: "black",
    fontSize: 20,
    maxWidth: 260,
    marginTop: 20,
    marginBottom: 20,
  },
  startText: {
    color: "White",
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: "cornflowerblue",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});