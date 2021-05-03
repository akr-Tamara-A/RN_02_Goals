import React from 'react';
import {View, StyleSheet, Button, Image} from 'react-native';
import RegularText from '../components/RegularText';
import BoldText from '../components/BoldText';
import COLORS from '../utils/colorConstants';
import MainButton from '../components/MainButton';

const GameOverScreen = ({rounds, userNumber, startNewGame}) => {
  const highlightTextColor = {
    color: COLORS.primary,
  };

  return (
    <View style={[styles.screen]}>
      <BoldText style={styles.title}>Game Over!</BoldText>
      <View style={styles.imageBox}>
        <Image
          source={require('../assets/bg_success.png')}
          style={styles.image}
        />
      </View>
      <RegularText style={styles.result}>
        Your phone needed{' '}
        <BoldText style={[styles.highlight, highlightTextColor]}>
          {rounds}
        </BoldText>{' '}
        rounds to guess number{' '}
        <BoldText style={[styles.highlight, highlightTextColor]}>
          {userNumber}
        </BoldText>
      </RegularText>
      <MainButton text="NEW GAME" onPress={startNewGame} />
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
  title: {
    fontSize: 22,
  },
  imageBox: {
    borderRadius: 120,
    borderColor: 'black',
    borderWidth: 3,
    width: 240,
    height: 240,
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  result: {
    textAlign: 'center',
    marginHorizontal: 50,
    marginBottom: 20,
    fontSize: 18,
  },
});

export default GameOverScreen;
