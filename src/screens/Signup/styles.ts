import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  focus: {
    color: "#00008B"
  },

  goBack: {
    marginTop: '5%',
    marginBottom: '10%',
  },

  nextButton: {
    alignSelf: 'center',
    paddingHorizontal: '15%',
    marginTop: '10%',

  },
  input: {
    backgroundColor: Colors.gray,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 14,
    borderRadius: 8,
    
  },
  logoSoma: {
    height: 150,
  },

  loginButton: {
    marginTop: '15%',
    alignSelf: 'center',
    paddingHorizontal: '20%',
  },
  container: {
    paddingTop: '30%',
  },
  sucesstext:{
    color:Colors.black,
    textAlign:"justify",
 
    
    
  },
  textcontainer:{
  textAlign:"justify",
  marginLeft:40,
  marginRight:60
  },
  separator: {
    margin: 10,
  },
  erro: {
    color: 'red',
  },


});

export default styles;
