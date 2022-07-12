import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#0B0909',
  },
  button: {
    height: 48,
    width: 200,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#43B028',
    marginTop: 5,
  },
  buttontext: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  item: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16,
    color: '#0B0909',
  },
});
