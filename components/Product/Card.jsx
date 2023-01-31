import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Image} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';
import BackIcon from '../../assets/BackIcon';

const Card = ({navigation}) => {
  const {
    params: {title, price, quantity, city, adress, delivery},
  } = useRoute();
  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}></View>
        <View style={styles.descriptionBox}>
          <Text style={styles.title}>Цена</Text>
          <Text style={styles.value}>{price}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.descriptionBox}>
          <Text style={styles.title}>Количество</Text>
          <Text style={styles.value}>{quantity}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.descriptionBox}>
          <Text style={styles.title}>Наличие доставки</Text>
          <Text style={styles.value}>{delivery ? 'Есть' : 'Hету'}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.descriptionBox}>
          <Text style={styles.title}>Город</Text>
          <Text style={styles.value}>{city}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.descriptionBox}>
          <Text style={styles.title}>Улица</Text>
          <Text style={styles.value}>{adress}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#FFF8ED',
    paddingVertical: 7,
    position: 'relative',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'right',
    letterSpacing: -0.333333,
    color: '#3C6954',
  },
  value: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'right',
    letterSpacing: -0.333333,
    color: ' #333333',
  },
  line: {
    borderWidth: 1,
    borderColor: '#DCE4E0',
    marginVertical: 10,
  },
  heading: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 23,
    textAlign: 'right',
    letterSpacing: -0.333333,
    color: '#333333',
  },
  goBack: {
    position: 'absolute',
    top: 68,
    left: 10,
  },
  imageContainer: {
    width: '100%',
    height: 220,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  descriptionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
