import React, { useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import AppText from '../AppText/AppText';
import styles from './styles';
import Button from '../Button/Button';
import UserDrawerItem from './UserDrawerItem';
import { useDispatch } from 'react-redux';
import ConfirmModal from '../Modal/ConfirmModal';
import { clearUser } from '../../store/user/actions';

const Drawer = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const { navigation } = props

  
  
  

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const handleLogoff = () => {
    dispatch(clearUser());
  };

  return (
    <DrawerContentScrollView
      {...props}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <UserDrawerItem />

      <DrawerItem
        style={styles.item}
        label={() => <AppText customStyle={styles.labelText}>Início</AppText>}
        onPress={() => navigation.navigate('ConstructionStack')}
      />

      <DrawerItem
        style={styles.item}
        label={() => (
          <AppText customStyle={styles.labelText}>Empreendimentos</AppText>
        )}
        onPress={() => navigation.navigate('ConstructionStack')}
      />

      <DrawerItem
        style={styles.item}
        label={() => (
          <AppText customStyle={styles.labelText}>Agendamentos</AppText>
        )}
        onPress={
          () => navigation.navigate('SchedulingStack', {screen:"Scheduling", props})
           
        }
      />

      <DrawerItem
        style={styles.item}
        label={() => <AppText customStyle={styles.labelText}>Perfil</AppText>}
        onPress={() => navigation.navigate('ConstructionStack')}
      />

      <DrawerItem
        style={styles.item}
        label={() => (
          <AppText customStyle={styles.labelText}>Financiamento</AppText>
        )}
        onPress={() => navigation.navigate('ConstructionStack')}
      />

      <DrawerItem
        style={styles.item}
        label={() => (
          <AppText customStyle={styles.labelText}>Vizinhança</AppText>
        )}
        onPress={() => navigation.navigate('ConstructionStack')}
      />

      <DrawerItem
        style={styles.item}
        label={() => (
          <AppText customStyle={styles.labelText}>Termos de Uso</AppText>
        )}
        onPress={() => navigation.navigate('ConstructionStack')}
      />

      <DrawerItem
        style={styles.item}
        label={() => <AppText customStyle={styles.labelText}>Ajuda</AppText>}
        onPress={() => navigation.navigate('ConstructionStack')}
      />

      <Button
        customStyle={styles.signupStyle}
        label="Cadastre-se"
        onPress={() => navigation.navigate('Signup')}
        testID="btn_signup"
      />

      <Button
        customStyle={styles.signoutButton}
        label="Sair"
        type="secondary"
        onPress={() => {
          setVisible(true);
          navigation.closeDrawer();
        }}
        testID="btn_logout"
      />

      <ConfirmModal
        isVisible={visible}
        onDismiss={() => setVisible(false)}
        onConfirm={handleLogoff}
        modalText="Deseja realmente fazer logoff?"
      />
    </DrawerContentScrollView>
  );
};

export default Drawer;
