import React from 'react';
import {Text, StyleSheet} from 'react-native';

const RegularText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: 'normal',
  },
});

export default RegularText;
