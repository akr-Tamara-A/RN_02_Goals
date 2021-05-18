import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../utils/colorConstants';

const ActionButton = ({children, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.button}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: COLORS.default,
  },
});

export default ActionButton;
