import React, {useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {selectReportType} from '../../../../../../../utils/constants';
import {
  CollaborationPost,
  ContentPost,
  OpportunityPost,
  PostOptionsModal,
  SeekerPost,
} from '../../../../../../../components/Post';

export default function All({allPosts, userId, getAllData}) {
  const navigation = useNavigation();

  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllData().then(() => setRefreshing(false));
  }, []);

  const toggleOptionsModal = () => {
    setOptionsModalVisible(!optionsModalVisible);
  };

  const handleOnPressShare = (post) => {
    navigation.navigate('Share', {post});
  };

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={allPosts}
        renderItem={({item}) =>
          item.postType === 'CONTENT' ? (
            <ContentPost
              content={item}
              onPressOptions={toggleOptionsModal}
              onPressShare={() => handleOnPressShare(item)}
            />
          ) : item.postType === 'OPPORTUNITY' ? (
            <OpportunityPost
              opportunity={item}
              userId={userId}
              onPressOptions={toggleOptionsModal}
              onPressShare={() => handleOnPressShare(item)}
            />
          ) : item.postType === 'COLLABORATION' ? (
            <CollaborationPost
              collaboration={item}
              onPressOptions={toggleOptionsModal}
              onPressShare={() => handleOnPressShare(item)}
            />
          ) : item.postType === 'POST' ? (
            <SeekerPost
              post={item}
              onPressOptions={toggleOptionsModal}
              onPressShare={() => handleOnPressShare(item)}
            />
          ) : null
        }
        keyExtractor={({id}) => id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <PostOptionsModal
        reportType={selectReportType('Discover')}
        title="Discover"
        visible={optionsModalVisible}
        toggleModal={toggleOptionsModal}
      />
    </>
  );
}
