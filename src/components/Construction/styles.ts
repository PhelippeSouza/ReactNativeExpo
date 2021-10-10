import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
    paddingBottom: '3%',
    marginBottom: '5%',
  },
  coverImage: {
    height: 150,
    width: '100%',
    overflow: 'hidden',
    borderTopStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  cardBody: {
    paddingVertical: '2%',
    paddingHorizontal: '2%',
  },
  cardTitle: {
    marginBottom: '1%',
  },
});

export default styles;
