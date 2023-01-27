import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function ScreenComponent({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screen}>Food Market</Text>
      <View>
        <Button
          onPress={() => navigation.navigate('Welcome')}
          title="Next"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8ED',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 40,
    lineHeight: 47,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#3C6954',
  },
});

export default ScreenComponent;
