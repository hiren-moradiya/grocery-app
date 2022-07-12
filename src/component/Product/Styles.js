import {StyleSheet} from 'react-native';
import {FONT} from '../../assets';

export const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: '#fff',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  wrapper: {position: 'absolute'},
  icon: {position: 'absolute', top: 10, right: 10},
  priceWrapper: {
    height: 65,
    margin: 8,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    lineHeight: 16,
    fontWeight: '400',
    color: '#0B0909',
  },
  price: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    color: '#0B0909',
  },
  subPrice: {
    color: '#6D6B6B',
  },
  button: {
    height: 48,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#43B028',
    marginTop: 5,
  },
  buttontext: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  quantityWrapper: {
    flexDirection: 'row',
    margin: 5,
  },
  add: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#43B028',
  },
});
