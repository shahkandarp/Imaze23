import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const AppLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require('../data/61417-animated-emojis-party-emoji.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 1,
  },
});
export default AppLoader;
// kycc search type : login,history
// party celebration: on registration,on winning, on certifications
// dance party , 3 people doing party : general loading
// jumping gift boxes : on winning
// animated emoji: general loading
