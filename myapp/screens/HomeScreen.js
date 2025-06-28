import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { themes } from '../themes/themeColors';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const currentTheme = useSelector(state => state.theme.currentTheme);
  const theme = themes[currentTheme];

  const handleLogout = () => {
    signOut(auth).catch(error => {
      console.error('Logout error:', error);
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Multi-Theme App</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={() => navigation.navigate('Themes')}
      >
        <Text style={[styles.buttonText, { color: theme.text }]}>Choose Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.logoutButton, { borderColor: theme.text }]}
        onPress={handleLogout}
      >
        <Text style={[styles.logoutText, { color: theme.text }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:      { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title:          { fontSize: 22, marginBottom: 20 },
  button:         { width: width * 0.6, paddingVertical: 10, borderRadius: 6, alignItems: 'center' },
  buttonText:     { fontSize: 16, fontWeight: '500' },
  logoutButton:   {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderWidth: 1,
  },
  logoutText:     { fontSize: 14 }
});

export default HomeScreen;
