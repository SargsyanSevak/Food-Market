import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import FilterIcon from '../../assets/FilterIcon';
import SelectDropdown from 'react-native-select-dropdown';
import ArrowBottom from '../../assets/ArrowBottom';
import {ContextValue} from '../Context/Context';

const Filter = () => {
  const {showFilter, setShowFilter} = useContext(ContextValue);
  const [city, setCity] = useState(['Valencia']);
  const [isDelivery, setIsDelivery] = useState(['Есть', 'нету']);
  const [filterAs, setFilterAs] = useState(['Сперва новые']);
  return (
    <View style={showFilter ? styles.filterContainer : styles.isNone}>
      <View style={styles.header}>
        <Text style={styles.heading}>Сортировка</Text>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => setShowFilter(!showFilter)}>
          <FilterIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.filter}>
        <Text style={styles.title}>Цена</Text>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} placeholder="От" />
          <Text style={styles.minus}>-</Text>
          <TextInput style={styles.input} placeholder="До" />
        </View>
        <Text style={styles.title}>По рейтингу</Text>
        <View style={styles.selectBox}>
          <SelectDropdown
            buttonStyle={styles.select}
            buttonTextStyle={styles.buttonTextStyle}
            data={filterAs}
            defaultValue={filterAs[0]}
          />
          <ArrowBottom style={styles.arrowBottom} />
        </View>
        <Text style={styles.title}>Город</Text>
        <View style={styles.selectBox}>
          <SelectDropdown
            buttonStyle={styles.select}
            buttonTextStyle={styles.buttonTextStyle}
            data={city}
            defaultValue={city[0]}
          />
          <ArrowBottom style={styles.arrowBottom} />
        </View>
        <Text style={styles.title}>Наличие доставки</Text>
        <View style={styles.selectBox}>
          <SelectDropdown
            buttonStyle={styles.select}
            buttonTextStyle={styles.buttonTextStyle}
            data={isDelivery}
            defaultValue={isDelivery[0]}
          />
          <ArrowBottom style={styles.arrowBottom} />
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    backgroundColor: '#FFF8ED',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    left: 77,
    zIndex: 100,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  isNone: {
    display: 'none',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: -0.333333,
    color: '#333333',
  },
  buttonTextStyle: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: -0.333333,
    color: '#333333',
    textAlign: 'left',
  },
  title: {
    color: '#3C6954',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 500,
    marginBottom: 10,
    marginTop: 25,
  },
  input: {
    width: '43%',
    height: 40,
    borderRadius: 8,
    paddingLeft: 20,
    backgroundColor: '#FFFFFF',
  },
  filter: {
    flex: 1,
    marginTop: 80,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,

    width: '100%',
  },
  minus: {
    fontSize: 20,
    marginHorizontal: 8,
  },
  select: {
    width: 268,
    maxWidth: '100%',
    backgroundColor: '#ffff',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowBottom: {
    right: 30,
  },
  selectBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: '100%',
    marginLeft: 10,
  },
});
