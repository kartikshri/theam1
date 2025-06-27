
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setTheme } from '../redux/themeSlice';

const ThemeButtons = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button title="Light" onPress={() => dispatch(setTheme('light'))} />
      <Button title="Dark" onPress={() => dispatch(setTheme('dark'))} />
      <Button title="Blue" onPress={() => dispatch(setTheme('blue'))} />
      <Button title="Yellow" onPress={() => dispatch(setTheme('yellow'))} />
      <Button title="Green" onPress={() => dispatch(setTheme('green'))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginVertical: 20,
  },
});

export default ThemeButtons;
