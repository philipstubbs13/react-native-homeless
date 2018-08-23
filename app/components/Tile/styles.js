import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  tileRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tile: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '$border',
    padding: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '49.75%',
    marginBottom: '.5%',
  },
  text: {
    color: '$white',
    fontSize: 20,
  },
});