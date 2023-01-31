import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import BackIcon from '../../assets/BackIcon';
import FilterIcon from '../../assets/FilterIcon';
import SearchIcon from '../../assets/SearchIcon';
import Tiles from '../../assets/Tiles';
import BottomFilterIcon from '../../assets/BottomFilterIcon';
import DeliveryIcon from '../../assets/DeliveryIcon';
import ProfileIcon from '../../assets/ProfileIcon';
import ProductCard from '../Product/ProductCard';
import Filter from '../Product/Filter';
import { ContextValue } from '../Context/Context';

const BuyerHome = ({navigation}) => {
  const {showFilter,setShowFilter} = useContext(ContextValue)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/goods')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Filter/>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.goBack}
            onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
          <Text style={styles.heading}>Предложения</Text>
          <TouchableOpacity
            style={styles.goBack}
            onPress={() => setShowFilter(!showFilter)}>
            <FilterIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Поиск..." />
          <TouchableOpacity style={styles.searchIcon}>
            <SearchIcon />
          </TouchableOpacity>
        </View>
        {data.map(function (el, i) {
          return (
            <View style={styles.main} key={i}>
              <TouchableOpacity style={styles.product}>
                <ProductCard
                  img={el.img}
                  title={el.title}
                  price={el.price}
                  quantity={el.quantity}
                  city={el.city}
                  adress={el.adress}
                  delivery={el.delivery}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Tiles />
        </TouchableOpacity>
        <TouchableOpacity>
          <BottomFilterIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <DeliveryIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    position: 'relative',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    paddingHorizontal: 20,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    position: 'relative',
    paddingHorizontal: 20,
  },
  searchIcon: {
    position: 'absolute',
    right: 50,
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    flex: 1,
    backgroundColor: '#3C6954',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  product: {
    width: '100%',
    height: 116,
    backgroundColor: '#FFF8ED',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#3C6954',
    padding: 10,
    marginVertical: 10,
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
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 20,
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
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 23,
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
    fontWeight: 700,
  },
  outlinedText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 700,
  },
});

export default BuyerHome;
