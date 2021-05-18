import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import COLORS from '../utils/colorConstants';
import BoldText from './BoldText';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <BoldText style={styles.headerTitle}>{title}</BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: Dimensions.get('window').width > 400 ? 60 : 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: 'black',
    fontSize: Dimensions.get('window').width > 400 ? 18 : 16,
  },
});

export default Header;
