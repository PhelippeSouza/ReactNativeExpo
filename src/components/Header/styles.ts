import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingBottom: '2%',
    borderBottomWidth: 1,
    borderColor: Colors.gray,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
  },
  imageContainer: {},
  userImage: {
    height: 49,
    width: 49,
    borderRadius: 8,
    overflow: 'hidden',
  },
  textContainer: {
    marginLeft: '5%',
    justifyContent: 'center',
  },
  bellIcon: {
    marginLeft: 'auto',
    alignSelf: 'center',
    color: '#5A4F49',
  },

  menuIconContainer: {
    backgroundColor: Colors.primaryRed,
    marginTop: 'auto',
    marginLeft: 'auto',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  menuIcon: {
    color: Colors.white,
  },
});

export default styles;
