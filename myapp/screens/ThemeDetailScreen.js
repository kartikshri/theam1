import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  Alert,
  Linking,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { themes } from '../themes/themeColors';

const { width } = Dimensions.get('window');

export default function ThemeDetailScreen({ route }) {
  const { themeKey } = route.params;
  const theme = themes[themeKey];
  const [modalVisible, setModalVisible] = useState(false);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission denied');
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      console.log('Captured image:', result.assets[0].uri);
      Alert.alert('Photo captured!', result.assets[0].uri);
    }
  };

  const openSettings = () => {
    Linking.openSettings();
  };

  const playMusic = () => {
    Alert.alert('Music', '🎵 Playing music...');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.text }]}>
        {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)} Theme
      </Text>

      <View style={styles.phoneFrame}>
        <View style={[styles.statusBar, { backgroundColor: theme.primary }]}>
          <Text style={styles.statusText}>9:41 AM</Text>
        </View>

        <View style={styles.screen}>
          <Text style={[styles.appTitle, { color: theme.text }]}>My App</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: theme.text }}>Click Me</Text>
          </TouchableOpacity>

          <View style={[styles.card, { backgroundColor: theme.secondary }]}>
            <Text style={{ color: theme.text }}>Card content</Text>
          </View>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalBox, { backgroundColor: theme.background }]}>
            <Text style={[styles.modalTitle, { color: theme.text }]}>
              📱 Theme Preview
            </Text>

            <View style={styles.appsGrid}>
              <TouchableOpacity
                style={[styles.appIcon, { backgroundColor: theme.primary }]}
                onPress={openCamera}
              >
                <Text style={{ color: theme.text }}>📷</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.appIcon, { backgroundColor: theme.secondary }]}
                onPress={playMusic}
              >
                <Text style={{ color: theme.text }}>🎵</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.appIcon, { backgroundColor: theme.primary }]}
                onPress={() => Alert.alert('Chat', '💬 Chat coming soon...')}
              >
                <Text style={{ color: theme.text }}>💬</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.appIcon, { backgroundColor: theme.secondary }]}
                onPress={openSettings}
              >
                <Text style={{ color: theme.text }}>⚙️</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text
                style={[styles.linkText, { color: theme.primary, marginTop: 20 }]}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  phoneFrame: {
    width: width * 0.7,
    aspectRatio: 9 / 18,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#000',
    borderWidth: 4,
    borderColor: '#444',
  },
  statusBar: {
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: { color: '#fff', fontSize: 12 },
  screen: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: { fontSize: 20, marginBottom: 16, fontWeight: '600' },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '85%',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  appsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  appIcon: {
    width: 60,
    height: 60,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
