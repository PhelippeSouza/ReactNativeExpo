import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#00008B",
    alignItems: 'center',
    paddingVertical: '4%',
    borderRadius: 6,

    borderWidth: 1,
  },
  primaryLabel: {
    color: Colors.white,

  },

  secondaryButton: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingVertical: '4%',
    borderRadius: 6,
    borderColor: Colors.primaryRed,
    borderWidth: 1,
  },
  secondaryLabel: {
    color: Colors.primaryRed,
  
  },

  textButton: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingVertical: '4%',
    borderRadius: 6,
  },
  textButtonLabel: {
    color: Colors.black,
  },
  requestedbutton: {
    backgroundColor: '#5A4F49',
  },
  requestedLabel: {
    color: Colors.white,
    
  },
  sharebutton: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingVertical: '4%',
    borderRadius: 6,
    borderColor: 'gray',
    borderWidth: 1,
  },
  sharelabel: {
    color: 'gray',
  },
});

export default styles;
