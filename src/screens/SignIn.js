import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function SignIn({ onEnter }) {
  return (
    <View style={styles.container}>
      
      <Image
        source={require('../../assets/illustration.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas{'\n'}jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Text>

        <TouchableOpacity style={styles.button} onPress={onEnter}>
          <FontAwesome5 name="discord" size={24} color="#fff" />
          <View style={styles.divider} />
          <Text style={styles.buttonText}>Entrar com Discord</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1338',
    alignItems: 'center',
  },
illustration: {
  width: '100%',
  height: 360,
  marginTop: 40, 
},
content: {
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: 40,
  paddingTop: 40, 
},
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    color: '#DDE3F0',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 16,
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E51C44',
    borderRadius: 8,
    height: 56,
    width: '100%',
    paddingHorizontal: 20,
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
