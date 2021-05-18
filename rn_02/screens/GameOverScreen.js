import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import RegularText from '../components/RegularText';
import BoldText from '../components/BoldText';
import COLORS from '../utils/colorConstants';
import MainButton from '../components/MainButton';

const GameOverScreen = ({rounds, userNumber, startNewGame}) => {
  const [availebleDeviceWidth, setAvailebleDeviceWidth] = useState(
    Dimensions.get('window').width,
  );

  /** */
  useEffect(() => {
    const updateLayout = () => {
      setAvailebleDeviceWidth(Dimensions.get('window').width);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => Dimensions.removeEventListener('change', updateLayout);
  });

  /** */
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: availebleDeviceWidth > 400 ? 24 : 16,
    },
    imageBox: {
      borderRadius: (availebleDeviceWidth * 0.7) / 2,
      borderColor: 'black',
      borderWidth: 3,
      width: availebleDeviceWidth * 0.7,
      height: availebleDeviceWidth * 0.7,
      overflow: 'hidden',
      marginVertical: availebleDeviceWidth > 400 ? 30 : 15,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    result: {
      textAlign: 'center',
      marginHorizontal: 50,
      marginBottom: availebleDeviceWidth > 400 ? 20 : 10,
      fontSize: availebleDeviceWidth > 400 ? 18 : 16,
    },
    highlightText: {
      color: COLORS.primary,
    },
  });

  return (
    <ScrollView>
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
          <BoldText style={styles.highlightText}>{rounds}</BoldText> rounds to
          guess number{' '}
          <BoldText style={styles.highlightText}>{userNumber}</BoldText>
        </RegularText>
        <MainButton text="NEW GAME" onPress={startNewGame} />
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;
