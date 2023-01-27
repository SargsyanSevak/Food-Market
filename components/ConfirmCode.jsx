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

function ConfirmCode({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <View>
        <Text style={styles.heading}>Восстановление пароля</Text>
      </View>
      <View style={styles.pad20}>
        <Text style={styles.paragraph}>
          Мы отправим 6-ти значный код на вашу эл. почту для подтверждения
          личности
        </Text>
      </View>
      <View>
        <View style={styles.inputGroup}>
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>
        <Text style={styles.text}>Отправить код повторно</Text>
      </View>
      <View>
        <View>
          <TouchableOpacity
            style={styles.contained}
            onPress={() => navigation.navigate('NewPassword')}>
            <Text style={styles.containedText}>Подтвердить</Text>
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
    gap: 30,
  },
  pad20: {
    paddingHorizontal: 20,
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
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingBottom: 10,
  },
  inputGroup: {
    flexDirection: 'row',
  },
  input: {
    width: 40,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 265,
    height: 50,
    borderRadius: 8,
  },
  containedText: {
    color: '#FFFF',
    fontSize: 18,
  },
});

export default ConfirmCode;
