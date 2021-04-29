import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../utils/colorConstants';
import RegularText from './RegularText';

const NumberContainer = ({children, style}) => {
  const borderColor = {
    borderColor: COLORS.primary,
  };

  return (
    <View style={[styles.container, borderColor, style]}>
      <RegularText style={styles.number}>{children}</RegularText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 22,
  },
});

export default NumberContainer;
