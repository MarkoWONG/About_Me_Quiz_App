import { StyleSheet, Text, Image, Alert, View, Button, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native';
import React, { useState } from 'react';

export default function Quiz({ navigation }) {
  const [show_Hide1, setShowHide1] = useState('none');

  const [text1, setText1] = useState('Show Hint');

  const letToggle1 = () => {

    if (show_Hide1 === 'flex') {
      setShowHide1('none');
      setText1('Show Hint')
    } else {
      setShowHide1('flex');
      setText1('Hide Hint')
    }
  }
  const [show_Hide2, setShowHide2] = useState('none');

  const [text2, setText2] = useState('Show Hint');

  const letToggle2 = () => {

    if (show_Hide2 === 'flex') {
      setShowHide2('none');
      setText2('Show Hint')
    } else {
      setShowHide2('flex');
      setText2('Hide Hint')
    }
  }
  const [show_Hide3, setShowHide3] = useState('none');

  const [text3, setText3] = useState('Show Hint');

  const letToggle3 = () => {

    if (show_Hide3 === 'flex') {
      setShowHide3('none');
      setText3('Show Hint')
    } else {
      setShowHide3('flex');
      setText3('Hide Hint')
    }
  }
  const [show_Hide4, setShowHide4] = useState('none');

  const [text4, setText4] = useState('Show Hint');

  const letToggle4 = () => {

    if (show_Hide4 === 'flex') {
      setShowHide4('none');
      setText4('Show Hint')
    } else {
      setShowHide4('flex');
      setText4('Hide Hint')
    }
  }
  const [show_Hide5, setShowHide5] = useState('none');

  const [text5, setText5] = useState('Show Hint');

  const letToggle5 = () => {

    if (show_Hide5 === 'flex') {
      setShowHide5('none');
      setText5('Show Hint')
    } else {
      setShowHide5('flex');
      setText5('Hide Hint')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
            <Text style={styles.qtext}>
                1. Which types of cars do I like the most?
            </Text>
            <View style={styles.fixToText}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => Alert.alert('Incorrect', 'Unfornately not though they are pretty cool')}
                >
                <Text style={styles.startText}>American Cars</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => Alert.alert('Correct!','You know me so well alright')}
                >
                    <Text style={styles.startText}>JDMs</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.hint}>
                <Image source={require('../assets/car.jpg')}
                    style={{ width: 250, height: 250, borderRadius: 20, display: show_Hide1 }} 
                />
            </View>
            <Button onPress={letToggle1}
                title={text1} 
            />

            <Text style={styles.qtext}>
                2. My favourite holiday destination?
            </Text>
            <View style={styles.fixToText}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => Alert.alert('Incorrect', 'Nah try again')}
                >
                <Text style={styles.startText}>Europe</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => Alert.alert('Correct', 'What gave it away?')}
                >
                    <Text style={styles.startText}>Japan</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.hint}>
                <Image source={require('../assets/japan.jpg')}
                    style={{ width: 250, height: 250, borderRadius: 20,  display: show_Hide2 }} 
                />
            </View>
            <Button onPress={letToggle2}
            title={text2} 
            />

            <Text style={styles.qtext}>
                3. Am I a safe driver?
            </Text>
            <View style={styles.fixToText}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert('Correct', 'image is of me protecting my mates car')}
            >
                <Text style={styles.startText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert('Incorrect', 'Wow I see how it is')}
            >
                <Text style={styles.startText}>No</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.hint}>
                <Image source={require('../assets/safe.jpg')}
                    style={{ width: 250, height: 250, borderRadius: 20, display: show_Hide3 }} 
                />
            </View>
            <Button onPress={letToggle3}
            title={text3} 
            />

            <Text style={styles.qtext}>
                4. Am I a winter or a summer person?
            </Text>
            <View style={styles.fixToText}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert('Incorrect', 'Summer is overrated')}
            >
                <Text style={styles.startText}>Summer</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert('Correct', 'Winter allows me to snowboard')}
            >
                <Text style={styles.startText}>Winter</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.hint}>
                <Image source={require('../assets/snow.jpg')}
                    style={{ width: 250, height: 250, aborderRadius: 20,  display: show_Hide4 }} 
                />
            </View>
            <Button onPress={letToggle4}
            title={text4} 
            />
            <Text style={styles.qtext}>
                5. What is my favourite character?
            </Text>
            <View style={styles.fixToText}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert('Correct', 'My man!')}
            >
                <Text style={styles.startText}>Miku</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert('Incorrect', "I'm Batman!")}
            >
                <Text style={styles.startText}>Batman</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.hint}>
                <Image source={require('../assets/miku.jpg')}
                    style={{ width: 250, height: 250, marginTop: 10, borderRadius: 20, display: show_Hide5 }} 
                />
            </View>
            <Button onPress={letToggle5}
                title={text5} 
            />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hint: {
    flexDirection: 'row',
    justifyContent: 'center', 
    flex: 1,
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: "cornflowerblue",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,

  },
  qtext: {
    fontSize: 20,
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
  },
});

