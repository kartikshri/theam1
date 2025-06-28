
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { themes } from '../themes/themeColors';
import ThemeButtons from '../components/ThemeButtons';

const ThemeScreen = () => {
  const currentTheme = useSelector(state => state.theme.currentTheme);
  const theme = themes[currentTheme];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemeButtons />
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 } });

export default ThemeScreen;
