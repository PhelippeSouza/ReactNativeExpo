import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import AppText from '../AppText/AppText';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { UserState } from '../../store/user/types';
import Colors from '../../constants/Colors';
const DefaultImage = require('../../assets/images/default_user.png');

const UserDrawerItem = () => {
  const { name } = useSelector<RootState, UserState>((state) => state.user);
  return (
    <View style={styles.userContaner}>
      <FastImage style={styles.userAvatar} source={DefaultImage} />

      <AppText type="bold" customStyle={{ color: Colors.primaryRed }}>
        Olá, {name}
      </AppText>
    </View>
  );
};

export default UserDrawerItem;
