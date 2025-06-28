import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';

import LoginScreen from './auth/LoginScreen';
import SignupScreen from './auth/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ThemeScreen from './screens/ThemeScreen';
import ThemeDetailScreen from './screens/ThemeDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // optional loader state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return null; // Optional: splash or loading screen

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          {user ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
              <Stack.Screen name="Themes" component={ThemeScreen} options={{ title: 'Themes' }} />
              <Stack.Screen
                name="ThemeDetail"
                component={ThemeDetailScreen}
                options={({ route }) => ({
                  title:
                    route.params.themeKey.charAt(0).toUpperCase() +
                    route.params.themeKey.slice(1),
                })}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
              <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
