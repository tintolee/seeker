import React from 'react';
import {Alert} from 'react-native';
import ModalBottom from '../../../../../../components/BottomActionModal';
import ActionItem from '../../../../../../components/BottomActionModal/ActionItem';
import Divider from '../../../../../../components/BottomActionModal/Divider';

export default function RouteMapOptions({
  isCompleted,
  visible,
  toggleModal,
  deleteRouteMapOnPress,
  editRouteMapOnPress,
  markCompleteOnPress,
  onModalHide,
}) {
  return (
    <ModalBottom
      visible={visible}
      toggleModal={toggleModal}
      onModalHide={onModalHide}>
      <ActionItem
        icon={isCompleted ? 'cornerUpRight' : 'checkmark'}
        name={isCompleted ? 'Remove mark complete' : 'Mark as complete'}
        onPress={markCompleteOnPress}
      />
      <Divider />
      <ActionItem
        icon={'edit'}
        name="Edit route map"
        onPress={editRouteMapOnPress}
      />
      <Divider />
      <ActionItem
        icon={'close'}
        name="Delete route map"
        isDestructiveButton={true}
        onPress={deleteRouteMapOnPress}
      />
    </ModalBottom>
  );
}
