import React, { useState } from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {width} from '../../../../../../../components/Theme';
import PostGrid from '../../../../../../../components/PostGrid';
import PreviewModal from '../../../../../../../components/PreviewModal';
// import { SharedElement } from 'react-navigation-shared-element';


export default function PostsGridView({posts, seeker}) {
  const navigation = useNavigation();
  const [isPreviewModal, setIsPreviewModal] = useState(false);
  return (
    <View style={styles.container}>
      <PreviewModal 
        post      = {isPreviewModal} 
        isVisible = {isPreviewModal !== false} 
        onClose   = {()=>setIsPreviewModal(false)}
        isMine   = {true}
        seeker    = {seeker}
        navigation = {navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          
          {posts.map((item, index) => (
            // <SharedElement id ={item.id}>
              <PostGrid
                key={index}
                post={item}
                onPress={() =>
                  navigation.navigate('ProfilePostFeed', {
                    postId: item.id,
                    title: `${seeker.firstName} ${seeker.lastName}`,
                  })
                }
                onLongPress = {(post)=>{
                  // alert("---")
                  // navigation.navigate("PreviewModal",{post, isMine: true, seeker})
                  setIsPreviewModal(post)
                }}
                isViewer = {isPreviewModal !== false}
              />
            // </SharedElement>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
