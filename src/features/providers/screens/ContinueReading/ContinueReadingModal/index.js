import React from 'react';
import {Alert} from 'react-native';
import ModalBottom from '../../../../../components/BottomActionModal';
import ActionItem from '../../../../../components/BottomActionModal/ActionItem';
import Divider from '../../../../../components/BottomActionModal/Divider';

export default function OpportunityOptionsModal({
  visible,
  toggleModal,
}) {
  

  const shareToOnPress = () => {
    Alert.alert('Coming soon...');
  };

  const flagInappropriateOnPress = () => {
    Alert.alert('Coming soon...');
  };
  return (
    <ModalBottom
      visible={visible}
      toggleModal={toggleModal}
    >
      <ActionItem
        icon={'flag'}
        name="Flag as inappropriate"
        onPress={flagInappropriateOnPress}
      />
      <Divider />
      <ActionItem icon={'copy'} name="Share to…" onPress={shareToOnPress} />
    </ModalBottom>
  );
}
