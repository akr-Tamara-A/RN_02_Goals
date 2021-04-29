import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const GameOverScreen = ({rounds, userNumber, startNewGame}) => {
  return (
    <View style={[styles.screen]}>
      <Text>Game Over!</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={startNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameOverScreen;
