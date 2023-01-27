import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckIcon from '../assets/CheckIcon';

function SuccessAlert({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CheckIcon />
      </View>
      <Text style={styles.heading}>Ваш пароль успешно изменён</Text>
      <View>
        <View>
          <TouchableOpacity
            style={styles.contained}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.containedText}>Войти</Text>
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
    gap: 70,
  },
  heading: {
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 30,
    lineHeight: 42,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#333333',
    paddingHorizontal: 60,
  },
  contained: {
    color: '#FFFFFF',
    backgroundColor: '#3C6954',
    paddingHorizontal: 130,
    paddingVertical: 10,
    borderRadius: 8,
  },
  containedText: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: 700,
  },
});

export default SuccessAlert;
