import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{ useState } from 'react';
import { Button } from 'react-native/types_generated/index';

export default function App() {
  const [showText, setShowText] = useState(false);

  const handlePress = () =>{
    setShowText(true);
  }

  return (
    <View style={styles.container}>
      <Button
        title="нажми"
        onPress={handlePress}
        color="#841584"
      />

      {showText && (
        <Text style={styles.revealedText}>
          Привет, вы нажали на кнопку!
        </Text>
      )}

      <Text style={styles.initialText}>Open up App.js to start working on your app!</Text>

      <StatusBarr style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialText: {
    marginTop: 20,
    fontSize: 14,
    color: '#aaa',
  },
  revealedText: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
  }
});
