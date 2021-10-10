import React from 'react';
import Modal from 'react-native-modal';
import { View, ActivityIndicator } from 'react-native';
import AppText from '../AppText/AppText';
import styles from './styles';
import Button from '../Button/Button';
import Colors from '../../constants/Colors';

interface ConfirmModalProps {
  isVisible: boolean;
  loading?: boolean;
  confirmText?: string;
  cancelText?: string;
  modalText: string;
  onDismiss: () => void | Promise<any>;
  onConfirm: () => void | Promise<any>;
}

const ConfirmModal = ({
  isVisible,
  loading = false,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  modalText,
  onDismiss = () => {},
  onConfirm = () => {},
}: ConfirmModalProps) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onDismiss}>
      <View style={styles.container}>
        <AppText type="bold" fontSize={18} customStyle={styles.mainText}>
          {modalText}
        </AppText>

        <View style={styles.buttonContainer}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.primaryRed} />
          ) : (
            <>
              <Button
                label={cancelText}
                type="secondary"
                onPress={onDismiss}
                customStyle={styles.cancelButton}
                testID="btn_modal_cancel"
              />
              <Button
                label={confirmText}
                onPress={onConfirm}
                customStyle={styles.confirmButton}
                testID="btn_modal_confirm"
              />
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
