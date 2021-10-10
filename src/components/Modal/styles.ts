import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: '5%',
    paddingHorizontal: '4%',
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '6%',
  },
  mainText: {
    textAlign: 'center',
  },
  cancelButton: {
    paddingHorizontal: '5%',
  },
  confirmButton: {
    paddingHorizontal: '5%',
  },
});

export default styles;
