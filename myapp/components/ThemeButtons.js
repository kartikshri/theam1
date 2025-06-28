
import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setTheme } from '../redux/themeSlice';
import { themes } from '../themes/themeColors';

const themeKeys = Object.keys(themes);

const ThemeButtons = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {themeKeys.map(key => (
        <TouchableOpacity
          key={key}
          style={[styles.button, { backgroundColor: themes[key].primary }]}
          onPress={() => {
            dispatch(setTheme(key));
            setTimeout(() => {
              navigation.navigate('ThemeDetail', { themeKey: key });
            }, 0); // ✅ delay fix
          }}
        >
          <Text style={[styles.text, { color: themes[key].text }]}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 6,     // Smaller button
    marginVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  }
});

export default ThemeButtons;
