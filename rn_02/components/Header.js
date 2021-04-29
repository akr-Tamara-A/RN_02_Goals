import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../utils/colorConstants';
import BoldText from './BoldText';

const Header = ({title}) => {
  const bgStyle = {
    backgroundColor: COLORS.primary,
  };

  return (
    <View style={[styles.header, bgStyle]}>
      <BoldText style={styles.headerTitle}>{title}</BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});

export default Header;
