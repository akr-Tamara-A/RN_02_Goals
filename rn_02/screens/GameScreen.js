import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {genereteRandomNumber} from '../utils/genereteRandomNumber';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import RegularText from '../components/RegularText';
import ActionButton from '../components/ActionButton';
import {Icon} from 'react-native-elements';

const GameScreen = ({userChoice, onGameOver}) => {
  const currentLow = useRef(1);
  const currentHigh = useRef(99);

  const [currentGuess, setCurrentGuess] = useState(
    genereteRandomNumber(1, 99, userChoice),
  );
  const [rounds, setRounds] = useState(0);

  /** */
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver, rounds]);

  /** */
  const handleNextGuess = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("That's a lie!", 'You know that this is wrong.....', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower' && currentGuess > userChoice) {
      currentHigh.current = currentGuess;
    }
    if (direction === 'greater' && currentGuess < userChoice) {
      currentLow.current = currentGuess;
    }
    setCurrentGuess(
      genereteRandomNumber(
        currentLow.current,
        currentHigh.current,
        currentGuess,
      ),
    );
    setRounds(currentRound => currentRound + 1);
  };

  return (
    <View style={[styles.screen]}>
      <RegularText>Opponent's guess</RegularText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonsContainer}>
        <ActionButton onPress={handleNextGuess.bind(this, 'lower')}>
          <Icon name="arrow-drop-down" color="white" size={50} />
        </ActionButton>
        <ActionButton onPress={handleNextGuess.bind(this, 'greater')}>
          <Icon name="arrow-drop-up" color="white" size={50} />
        </ActionButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
