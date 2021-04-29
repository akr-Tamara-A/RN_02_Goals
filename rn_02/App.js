import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  /** */
  const handleGameStart = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  /** */
  const handleGameOver = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  /** */
  const handleStartNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a number" />
      {!userNumber && guessRounds === 0 && (
        <StartGameScreen onStartGame={handleGameStart} />
      )}
      {userNumber && guessRounds === 0 && (
        <GameScreen userChoice={userNumber} onGameOver={handleGameOver} />
      )}
      {userNumber && guessRounds > 0 && (
        <GameOverScreen
          rounds={guessRounds}
          userNumber={userNumber}
          startNewGame={handleStartNewGame}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
