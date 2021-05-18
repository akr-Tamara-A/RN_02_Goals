import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import COLORS from '../utils/colorConstants';
import RegularText from '../components/RegularText';
import BoldText from '../components/BoldText';
import MainButton from '../components/MainButton';

/** */
const StartGameScreen = ({onStartGame}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('window').width / 4,
  );

  /** */
  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => Dimensions.removeEventListener('change', updateLayout);
  });

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
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <ScrollView>
          <View style={styles.screen}>
            <BoldText style={styles.title}>Start a New Game!</BoldText>
            <Card style={styles.inputContainer}>
              <RegularText>Select a Number</RegularText>
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
                <View style={{width: buttonWidth}}>
                  <Button
                    title="Reset"
                    onPress={handleResetInput}
                    color={COLORS.accent}
                  />
                </View>
                <View style={{width: buttonWidth}}>
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
                <RegularText>You selected</RegularText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton text="START GAME" onPress={handleStartGame} />
              </Card>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontSize: Dimensions.get('window').width > 400 ? 20 : 18,
    marginBottom: Dimensions.get('window').width > 400 ? 20 : 10,
  },
  inputContainer: {
    width: '100%',
    maxWidth: '75%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
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
