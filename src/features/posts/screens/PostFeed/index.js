import React, {useState, useRef, useEffect} from 'react';
import {FlatList} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {SeekerPost} from '../../../../components/Post';
import PostOptionsModal from './components/PostOptionsModal';
import PostDeleteModal from './components/PostDeleteModal';

export default function PostFeed({route}) {
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const [postDeleteModalVisible, setPostDeleteModalVisible] = useState(false);
  const [optionType, setOptionType] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const navigation = useNavigation();

  const listRef = useRef();

  const {routeMapDetail} = useSelector(
    (state) => ({
      routeMapDetail: state.routeMapsReducer.routeMapDetail,
    }),
    shallowEqual,
  );

  useEffect(() => {
    const postId = route.params?.postId;

    if (postId && routeMapDetail && routeMapDetail.posts) {
      const itemIndex = routeMapDetail.posts.items.findIndex(
        (item) => item.id === postId,
      );

      if (listRef.current !== null && itemIndex !== -1) {
        listRef.current.scrollToIndex({index: itemIndex});
      }
    }
  }, []);

  const toggleOptionsModal = (post) => {
    setOptionsModalVisible(!optionsModalVisible);
    setSelectedPost(post);
  };

  const togglePostDeleteModal = () => {
    setPostDeleteModalVisible(!postDeleteModalVisible);
  };

  const deletePostOnPress = () => {
    setOptionType('DeletePost');
    toggleOptionsModal(selectedPost);
  };

  const onOptionsModalHide = () => {
    if (optionType === 'DeletePost') {
      togglePostDeleteModal();
    }
    setOptionType('');
  };

  const handleOnPressShare = (post) => {
    navigation.navigate('Share', {post});
  };

  return (
    <>
      {routeMapDetail && (
        <FlatList
          ref={listRef}
          showsVerticalScrollIndicator={false}
          data={routeMapDetail.posts.items}
          renderItem={({item}) => (
            <SeekerPost
              post={item}
              onPressOptions={() => toggleOptionsModal(item)}
              onPressShare={() => handleOnPressShare(item)}
            />
          )}
          keyExtractor={({id}) => id.toString()}
          onScrollToIndexFailed={(info) => {
            const wait = new Promise((resolve) => setTimeout(resolve, 700));
            wait.then(() => {
              listRef.current?.scrollToIndex({
                index: info.index,
                animated: true / false,
              });
            });
          }}
        />
      )}
      <PostOptionsModal
        visible={optionsModalVisible}
        toggleModal={toggleOptionsModal}
        post={selectedPost}
        deletePostOnPress={deletePostOnPress}
        onModalHide={onOptionsModalHide}
      />
      <PostDeleteModal
        visible={postDeleteModalVisible}
        toggleModal={togglePostDeleteModal}
        post={selectedPost}
      />
    </>
  );
}
