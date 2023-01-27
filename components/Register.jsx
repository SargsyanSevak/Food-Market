import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import MyCheckBox from '../assets/MyCheckBox';
import BackIcon from '../assets/BackIcon';

function Register({navigation}) {
  const [registerAs, setRegisterAs] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <ScrollView>
        <View>
          <Text style={styles.heading}>Регистрация</Text>
        </View>
        <View style={styles.buttonRow}>
          <View>
            <TouchableOpacity
              style={
                registerAs === 'Физ. лицо' ? styles.activeBtn : styles.outlined
              }
              onPress={() => setRegisterAs('Физ. лицо')}>
              <Text
                style={
                  registerAs === 'Физ. лицо'
                    ? styles.outlinedTextWhite
                    : styles.outlinedText
                }>
                Физ. лицо
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={
                registerAs === 'Юр. лицо' ? styles.activeBtn : styles.outlined
              }
              onPress={() => setRegisterAs('Юр. лицо')}>
              <Text
                style={
                  registerAs === 'Юр. лицо'
                    ? styles.outlinedTextWhite
                    : styles.outlinedText
                }>
                Юр. лицо
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputGroup}>
          <View>
            <View style={registerAs === 'Юр. лицо' ? '' : styles.disNone}>
              <Text style={styles.text}>ИНН</Text>
              <TextInput style={styles.input} />
            </View>
            <Text style={styles.text}>Имя</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Фамилия</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Отчество</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Город</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Индекс</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Телефон</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Эл. почта</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Пароль</Text>
            <TextInput style={styles.input} />
            <Text style={styles.text}>Повтор пароля</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View>
          <MyCheckBox />
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.registerBtn}
              onPress={() => navigation.navigate('ConfirmEmail')}>
              <Text style={styles.containedText}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    left: 15,
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
    marginBottom: 42,
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  contained: {
    color: '#FFFFFF',
    backgroundColor: '#3C6954',
    height: 29,
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  outlined: {
    backgroundColor: '#FFF8ED',
    height: 29,
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#3C6954',
    borderWidth: 1,
  },
  registerBtn: {
    color: '#FFFFFF',
    backgroundColor: '#3C6954',
    width: 265,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 50,
  },
  containedText: {
    color: '#FFFF',
    fontSize: 18,
  },
  outlinedText: {
    fontSize: 18,
    color: '#333333',
  },
  outlinedTextWhite: {
    color: '#FFFF',
    fontSize: 18,
  },
  activeBtn: {
    color: '#FFFF',
    backgroundColor: '#3C6954',
    height: 29,
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  disNone: {
    display: 'none',
  },
});

export default Register;
