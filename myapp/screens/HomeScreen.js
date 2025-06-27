
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { themes } from '../themes/themeColors';
import ThemeButtons from '../components/ThemeButtons';

const HomeScreen = () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const theme = themes[currentTheme];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>Welcome to Theme App</Text>
      <Button title="Sample Button" color={theme.primary} />
      <ThemeButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});

export default HomeScreen;
