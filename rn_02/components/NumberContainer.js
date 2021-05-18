import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import COLORS from '../utils/colorConstants';
import RegularText from './RegularText';

const NumberContainer = ({children, style}) => {
  return (
    <View style={styles.container}>
      <RegularText style={styles.number}>{children}</RegularText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: Dimensions.get('window').height > 600 ? 10 : 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
    borderColor: COLORS.primary,
  },
  number: {
    fontSize: Dimensions.get('window').height > 600 ? 22 : 20,
  },
});

export default NumberContainer;
