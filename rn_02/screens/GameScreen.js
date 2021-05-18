import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Alert, FlatList, Dimensions} from 'react-native';
import {genereteRandomNumber} from '../utils/genereteRandomNumber';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import RegularText from '../components/RegularText';
import ActionButton from '../components/ActionButton';
import {Icon} from 'react-native-elements';

const GameScreen = ({userChoice, onGameOver}) => {
  const currentLow = useRef(1);
  const currentHigh = useRef(99);

  const initGuess = genereteRandomNumber(1, 99, userChoice);

  const [currentGuess, setCurrentGuess] = useState(initGuess);
  const [pastGuesses, setPastGueses] = useState([initGuess]);
  const [availebleDeviceHeight, setAvailebleDeviceHeight] = useState(
    Dimensions.get('window').height,
  );

  /** */
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length - 1);
    }
  }, [currentGuess, userChoice, onGameOver, pastGuesses]);

  /** */
  useEffect(() => {
    const updateLayout = () => {
      setAvailebleDeviceHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => Dimensions.removeEventListener('change', updateLayout);
  });

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
      currentHigh.current = currentGuess - 1;
    }
    if (direction === 'greater' && currentGuess < userChoice) {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = genereteRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setPastGueses(curPastGuesses => [...curPastGuesses, nextNumber]);
  };

  /** */
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
    text: {
      marginBottom: availebleDeviceHeight > 600 ? 10 : 5,
    },
    cardContainer: {
      marginTop: availebleDeviceHeight > 600 ? 20 : 10,
      width: '80%',
      maxWidth: '95%',
      minWidth: 300,
      alignItems: 'center',
    },
    cardText: {
      textAlign: 'center',
      width: '80%',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
      width: '100%',
    },
    listContainer: {
      marginVertical: 10,
      flex: 1,
    },
    list: {
      flexGrow: 1,
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
    listItem: {
      marginVertical: 10,
      borderColor: 'grey',
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
  });

  return (
    <View style={[styles.screen]}>
      <RegularText style={styles.text}>Opponent's guess</RegularText>
      {availebleDeviceHeight < 500 ? (
        <>
          <RegularText style={styles.cardText}>
            Is this number more or less than yours?
          </RegularText>
          <View style={styles.buttonsContainer}>
            <ActionButton onPress={handleNextGuess.bind(this, 'lower')}>
              <Icon name="arrow-drop-down" color="white" size={50} />
            </ActionButton>
            <NumberContainer>{currentGuess}</NumberContainer>
            <ActionButton onPress={handleNextGuess.bind(this, 'greater')}>
              <Icon name="arrow-drop-up" color="white" size={50} />
            </ActionButton>
          </View>
        </>
      ) : (
        <>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card style={styles.cardContainer}>
            <RegularText style={styles.cardText}>
              Is this number more or less than yours?
            </RegularText>
            <View style={styles.buttonsContainer}>
              <ActionButton onPress={handleNextGuess.bind(this, 'lower')}>
                <Icon name="arrow-drop-down" color="white" size={50} />
              </ActionButton>
              <ActionButton onPress={handleNextGuess.bind(this, 'greater')}>
                <Icon name="arrow-drop-up" color="white" size={50} />
              </ActionButton>
            </View>
          </Card>
        </>
      )}
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.list}
          data={pastGuesses}
          keyExtractor={item => item}
          renderItem={({item, index}) => (
            <RegularText style={styles.listItem}>
              Round #{index + 1}: {item}
            </RegularText>
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;
