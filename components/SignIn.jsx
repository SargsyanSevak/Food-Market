import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import BackIcon from '../assets/BackIcon';

function Welcome({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <View>
        <Text style={styles.heading}>Вход</Text>
      </View>
      <View style={styles.inputGroup}>
        <View>
          <Text style={styles.text}>Эл. почта</Text>
          <TextInput style={styles.input} />
          <Text style={styles.text}>Пароль</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
          <TouchableOpacity
            onPress={() => navigation.navigate('RecoverPassword')}>
            <Text
              style={{
                textAlign: 'right',
                paddingHorizontal: 10,
                textDecorationLine: 'underline',
              }}>
              Забыли пароль?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <TouchableOpacity
            style={styles.contained}
            onPress={() => navigation.navigate('BuyerHome',{
              name:'hindi'
            })}>
            <Text style={styles.containedText}>Вход</Text>
          </TouchableOpacity>
        </View>
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
    position: 'relative',
    gap: 50,
  },
  goBack: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  text: {
    paddingHorizontal: 10,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    color: '#333333',
  },
  input: {
    width: 320,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal:10,
  },
  screen: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 35,
    lineHeight: 47,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#3C6954',
  },

  heading: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 36,
    lineHeight: 42,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#333333',
  },
  paragraph: {
    marginVertical: 15,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#545454',
  },
  contained: {
    color: '#FFFFFF',
    backgroundColor: '#3C6954',
    paddingHorizontal: 130,
    paddingVertical: 10,
    borderRadius: 8,
  },
  outlined: {
    backgroundColor: '#FFF8ED',
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: '#3C6954',
    marginTop: 24,
    borderWidth: 1,
  },
  containedText: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight:700
  },
  outlinedText: {
    fontSize: 18,
    color: '#333333',
    fontWeight:700
  },
});

export default Welcome;
