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

function NewPassword({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Задайте новый пароль</Text>
      </View>
      <View style={styles.pad20}>
        <Text style={styles.text}>
          Придумайте сложный пароль,содержащий строчные и прописные буквы,а так
          же цифры и символы
        </Text>
      </View>
      <View style={styles.inputGroup}>
        <View>
          <Text style={styles.text}>Новый пароль</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
          <Text style={styles.text}>Повторите пароль</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
      </View>
      <View>
        <View>
          <TouchableOpacity
            style={styles.contained}
            onPress={() => navigation.navigate('SuccessAlert')}>
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
    fontSize: 14,
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
    paddingHorizontal: 80,
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
    borderRadius: 8,
    width: 265,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  outlinedText: {
    fontSize: 18,
    color: '#333333',
  },
  pad20: {
    paddingHorizontal: 20,
  },
});

export default NewPassword;
