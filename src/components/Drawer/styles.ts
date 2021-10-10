import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {},
  labelText: {
    color: Colors.primaryRed,
  },
  item: {
    marginTop: '2%',
  },
  signupStyle: {
    marginTop: '10%',
    marginHorizontal: '8%',
    paddingVertical: '5%',
  },

  signoutButton: {
    borderWidth: 0,
    marginTop: '10%',
  },

  userContaner: {
    marginTop: '10%',
    marginBottom: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    height: 48,
    width: 48,
    marginHorizontal: '6%',
    borderRadius: 50,
  },
});

export default styles;
