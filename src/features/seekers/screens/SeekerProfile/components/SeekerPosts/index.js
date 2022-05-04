import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LineEyeOff} from '../../../../../../components/svg/icons';
import PostGrid from '../../../../../../components/PostGrid';
import PreviewModal from '../../../../../../components/PreviewModal';
import styles from './styles';

export default function SeekerPosts({
  firstName,
  lastName,
  visibleToSeekers,
  isFriend,
  posts,
  seekerDetail
}) {
  const navigation = useNavigation();

  const privateProfile = visibleToSeekers === null ? false : !visibleToSeekers;

  const hasPosts = posts?.items.length > 0;

  const PrivateProfile = () => (
    <View style={styles.noResult}>
      <View style={styles.noResultIcon}>
        <LineEyeOff width={42} height={42} color="#8f9bb3" />
      </View>
      <Text style={styles.noResultText}>
        This seeker’s profile is private. Connect to see activity.
      </Text>
    </View>
  );

  const NoPosts = () => (
    <View style={styles.noResult}>
      <Text style={styles.noResultText}>No activity yet.</Text>
    </View>
  );

  const [isPreviewModal, setIsPreviewModal] = useState(false);

  return (
    <View style={styles.container}>
      <PreviewModal 
        post      = {isPreviewModal} 
        isVisible = {isPreviewModal !== false} 
        onClose   = {()=>setIsPreviewModal(false)}
        isMine  = {false}
        seeker    = {seekerDetail}
        navigation = {navigation}
      />
      {privateProfile && !isFriend ? (
        <PrivateProfile />
      ) : !hasPosts ? (
        <NoPosts />
      ) : (
        <View style={styles.grid}>
          {posts.items.map((item, index) => (
            <PostGrid
              key={index}
              post={item}
              onPress={() =>{
                navigation.navigate('SeekerPostFeed', {
                  postId: item.id,
                  title: `${firstName} ${lastName}`,
                })
              }}
              onLongPress = {(post)=>{
                setIsPreviewModal(post)
                // alert('__HERE__')
                // navigation.navigate("SeekerRouteMapDetail",{screen: "PreviewModal",params: {post,  seekeer: seekerDetail}})
                // navigation.navigate("PreviewModal",{post,  seekeer: seekerDetail})
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
}
