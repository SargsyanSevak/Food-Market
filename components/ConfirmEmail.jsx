import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import BackIcon from '../assets/BackIcon';
import ClockIcon from '../assets/ClockIcon';
import TimeIcon from '../assets/TimeIcon';

function ConfirmEmail({navigation}) {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <SafeAreaView
        style={showAlert ? styles.containerWithOpacity : styles.container}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <View>
          <Text style={styles.heading}>Подтверждение Эл. Почты</Text>
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
              onPress={() => {
                setShowAlert(!showAlert);
              }}
              style={styles.contained}>
              <Text style={styles.containedText}>Подтвердить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <View style={showAlert ? styles.moderationAlert : styles.disNone}>
        <View>
          <TimeIcon />
          <ClockIcon style={styles.clockIcon}></ClockIcon>
        </View>
        <Text style={styles.alertText}>Ваш аккаунт на модерации</Text>
        <View>
          <View>
            <TouchableOpacity
              style={styles.contained}
              onPress={() => setShowAlert(false)}>
              <Text style={styles.containedText}>Закрыть</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
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
  containerWithOpacity: {
    flex: 1,
    backgroundColor: '#FFF8ED',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    gap: 30,
    opacity: 0.1,
  },
  pad20: {
    paddingHorizontal: 20,
  },
  goBack: {
    position: 'absolute',
    top: 60,
    left: 30,
  },
  disNone: {
    display: 'none',
  },
  clockIcon: {
    position: 'absolute',
    top: 17,
    left: 27,
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
    height: 55,
    margin: 8,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    borderColor:'#3C6954'
  },
  heading: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 36,
    lineHeight: 42,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#333333',
    paddingHorizontal: 40,
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
    fontWeight: 700,
  },
  moderationAlert: {
    width: 335,
    maxWidth: '100%',
    height: 371,
    position: 'absolute',
    top: 178,
    left: 27,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  alertText: {
    paddingHorizontal: 50,
    textAlign: 'center',
    fontSize: 28,
  },
});

export default ConfirmEmail;
