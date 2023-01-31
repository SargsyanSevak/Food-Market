import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckIcon from './CheckIcon';

function MyCheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsChecked(!isChecked)}
        style={styles.checkbox}>
        <View>
          <View style={isChecked ? styles.checked : styles.checkboxIcon}>
            <Text>V</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.paragraph}>
        Согласие на обработку персональных данных.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginVertical: 10,
  },
  checkbox: {
    backgroundColor: '#FFF8ED',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
  },
  checked: {
    display: 'none',
  },
  checkboxIcon: {
    fontSize: 20,
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 14,
  },
});

export default MyCheckBox;
