import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {selectReportType} from '../../../../../../../utils/constants';
import {
  OpportunityPost,
  PostOptionsModal,
} from '../../../../../../../components/Post';
import FilterBar from '../../FilterBar';

export default function Opportunities({opportunities, userId}) {
  const navigation = useNavigation();
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const toggleOptionsModal = (post) => {
    setSelectedPost(post);
    setOptionsModalVisible(!optionsModalVisible);
  };

  const handleOnPressShare = (post) => {
    navigation.navigate('Share', {post});
  };

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={opportunities}
        renderItem={({item}) => (
          <OpportunityPost
            opportunity={item}
            userId={userId}
            onPressOptions={() => toggleOptionsModal(item)}
            onPressShare={() => handleOnPressShare(item)}
          />
        )}
        keyExtractor={({id}) => id.toString()}
        ListHeaderComponent={<FilterBar />}
      />
      <PostOptionsModal
        reportType={selectReportType('Opportunity')}
        title={`${selectedPost?.opportunityProvider?.name} - ${selectedPost?.title}`}
        visible={optionsModalVisible}
        toggleModal={toggleOptionsModal}
      />
    </>
  );
}
