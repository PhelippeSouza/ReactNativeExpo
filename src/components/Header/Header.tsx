import React from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import AppText from '../AppText/AppText';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { UserState } from '../../store/user/types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
const DefaultImage = require('../../assets/images/default_user.png');

const Header = () => {
  const { name } = useSelector<RootState, UserState>((state) => state.user);
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={toggleDrawer}>
        <ImageBackground style={styles.userImage} source={DefaultImage}>
          <View style={styles.menuIconContainer}>
            <MaterialIcons style={styles.menuIcon} name="menu" size={18} />
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <AppText type="bold">Olá, {name}</AppText>
        <AppText customStyle={{ marginTop: 8 }} fontSize={12}>
          Você está em Vila Velha
        </AppText>
      </View>

      <FontAwesome name="bell" size={25} style={styles.bellIcon} />
    </View>
  );
};

export default Header;
