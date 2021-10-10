import React from 'react';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import AppText from '../AppText/AppText';
import FastImage from 'react-native-fast-image';
import { IConstruction } from '../../interfaces/IConstruction';
import enviroment from '../../enviroments/index';

interface ConstructionProps {
  construction: IConstruction;
  onPress: () => void;
}

const getImageUrl = (imageId: string) =>
  `${enviroment.API_URL}/Empreendimento/getImagemCapa?empreendimentoId=${imageId}`;

const Construction = ({ construction, onPress }: ConstructionProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <ImageBackground source={{ uri: imageUrl }} style={styles.coverImage}>
        <AppText>placeholder</AppText>
      </ImageBackground> */}

      <FastImage
        style={styles.coverImage}
        source={{
          uri: getImageUrl(construction.id),
          cache: FastImage.cacheControl.web,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />

      <View style={styles.cardBody}>
        <AppText type="bold" customStyle={styles.cardTitle}>
          {construction.cidade} - {construction.uf}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default Construction;
