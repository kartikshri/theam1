import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { themes } from '../themes/themeColors';

const { width, height } = Dimensions.get('window');

const imageMap = {
  red:    require('../assets/red.jpg'),
  blue:   require('../assets/blue.jpg'),
  yellow: require('../assets/yellow.jpg'),
  green:  require('../assets/green.jpg'),
  purple: require('../assets/purple.jpg'),
  orange: require('../assets/orange.jpg'),
  teal:   require('../assets/teal.jpg'),
  pink:   require('../assets/pink.jpg'),
  light:  require('../assets/light.jpg'),
  dark:   require('../assets/dark.jpg')
};

const ThemeDetailScreen = ({ route }) => {
  const { themeKey } = route.params;
  const theme = themes[themeKey];
  const imageSource = imageMap[themeKey] || imageMap.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  image:     { width: width * 0.8, height: height * 0.4 }
});

export default ThemeDetailScreen;
