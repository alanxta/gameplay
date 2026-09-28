import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

import SignIn from './src/screens/SignIn';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Schedule from './src/screens/Schedule';

export default function App() {
  const [screen, setScreen] = useState('SignIn');

  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden');
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0E1338" />
      {screen === 'SignIn' && <SignIn onEnter={() => setScreen('Home')} />}
      {screen === 'Home' && (
        <Home
          onOpenDetails={() => setScreen('Details')}
          onSchedule={() => setScreen('Schedule')}
        />
      )}
      {screen === 'Details' && <Details onBack={() => setScreen('Home')} />}
      {screen === 'Schedule' && <Schedule onBack={() => setScreen('Home')} />}
    </>
  );
}