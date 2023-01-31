import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import BasketIcon from '../../assets/BasketIcon';
import LocationIcon from '../../assets/LocationIcon';
import VerifiedIcon from '../../assets/VerifiedIcon';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({title, price, quantity, city, adress, delivery}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{
      navigation.navigate('Card',{
        title,
         price, 
         quantity, 
         city, 
         adress,
         delivery
      })
    }}>
      <Image source={require(`../../assets/img/Багеты.png`)} />
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.pricelg}>Цена</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.pricelg}>Количество</Text>
        <Text style={styles.price}>{quantity}</Text>
      </View>
      <View style={styles.rightSide}>
        <TouchableOpacity style={styles.city}>
          <LocationIcon />
          <Text style={styles.cityName}>{city}</Text>
        </TouchableOpacity>

        <Text style={styles.adress}>{adress}</Text>
        <TouchableOpacity style={styles.basket}>
          <BasketIcon />
        </TouchableOpacity>
        <Text style={styles.timeTitle}>Время публикации</Text>
        <Text style={styles.time}>1 час назад</Text>
      </View>
      <VerifiedIcon style={styles.VerifiedIcon} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 100,
  },
  VerifiedIcon: {
    position: 'absolute',
    top: -4,
    left: -3,
  },
  title: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: 600,
  },
  pricelg: {
    fontSize: 8,
    lineHeight: 9,
    fontWeight: 700,
    color: '#3C6954',
  },
  price: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 400,
    color: '#333333',
  },
  description: {
    marginHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  rightSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 2,
  },
  city: {
    flexDirection: 'row',
    gap: 5,
  },
  cityName: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 600,
    color: '#3C6954',
  },
  adress: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 500,
    color: ' #3C6954',
  },
  timeTitle: {
    fontSize: 8,
    lineHeight: 9,
    fontWeight: 700,
    color: '#3C6954',
  },
  time: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 600,
    color: '#333333',
  },
  basket: {
    marginBottom: 20,
  },
});
export default ProductCard;
