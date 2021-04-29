import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import COLORS from '../utils/colorConstants';

/** */
const StartGameScreen = ({onStartGame}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  /** */
  const handleNumberInput = inputText => {
    const validatedNumber = inputText.replace(/[^0-9]/g, '');
    setEnteredValue(validatedNumber);
  };

  /** */
  const handleResetInput = () => {
    setEnteredValue('');
    setIsConfirmed(false);
  };

  /** */
  const handleConfirmInput = () => {
    const chosenNumber = parseInt(enteredValue);
    if (!isNaN(chosenNumber) && chosenNumber > 0 && chosenNumber <= 99) {
      setIsConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{text: 'Ok', style: 'destructive', onPress: handleResetInput}],
      );
    }
  };

  /** */
  const handleStartGame = () => {
    onStartGame(selectedNumber);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={2}
            value={enteredValue}
            onChangeText={handleNumberInput}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={handleResetInput}
                color={COLORS.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={handleConfirmInput}
                color={COLORS.primary}
              />
            </View>
          </View>
        </Card>
        {isConfirmed && (
          <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={handleStartGame} />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default StartGameScreen;
