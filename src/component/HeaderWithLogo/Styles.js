import {StyleSheet} from 'react-native';
import {FONT} from '../../assets';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 370,
  },
  ImageBackground: {
    paddingHorizontal: 16,
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    paddingTop: 60,
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  logo: {
    height: 75,
    width: 150,
  },
  followBtn: {
    height: 40,
    width: 100,
    backgroundColor: '#000',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: '#fff',
    marginLeft: 7,
  },
  text: {
    marginTop: 17,
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
    color: '#fff',
  },
  subText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 16,
    color: '#fff',
  },
  info: {
    marginTop: 13,
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    lineHeight: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  inputWrapper: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    marginTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#9D9D9D',
  },
});
