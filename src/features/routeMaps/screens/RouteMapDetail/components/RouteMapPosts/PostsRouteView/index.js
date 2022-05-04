import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import EditStepModal from './EditStepModal';
import RouteMapDesign from '../../../../RouteMapDesign';
import styles from './styles';

export default function PostsRouteView({tab,posts, postFeedOnPress, seeker, toggleAddPostModal, isMine}) {
  const [editStepModalVisible, setEditStepModalVisible] = useState(false);

  const toggleEditStepModal = () => {
    setEditStepModalVisible(!editStepModalVisible);
  };



  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <RouteMapDesign tab={tab} seeker={seeker} posts = {posts} postFeedOnPress= {postFeedOnPress} toggleAddPostModal={toggleAddPostModal} isMine ={isMine}/>
        <EditStepModal
          visible={editStepModalVisible}
          toggleModal={toggleEditStepModal}
        />
      </ScrollView>
    </View>
  );
}
