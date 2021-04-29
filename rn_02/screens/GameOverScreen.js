import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import RegularText from '../components/RegularText';

const GameOverScreen = ({rounds, userNumber, startNewGame}) => {
  return (
    <View style={[styles.screen]}>
      <RegularText>Game Over!</RegularText>
      <RegularText>Number of rounds: {rounds}</RegularText>
      <RegularText>Number was: {userNumber}</RegularText>
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
