import React, {useState} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DoubleTap from '../../../components/DoubleTap';

export default function SeekerPost({post, onPressOptions, onPressShare}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeAnimation, setlikeAnimation] = useState(false);

  const likeHandler = (isPress) => {
    if (!isLiked) {
      setlikeAnimation(!likeAnimation);
      setIsLiked(!isLiked);
    }
    if (isPress) {
      setIsLiked(!isLiked);
    }
  };

  return (
    <View>
      <Header
        firstName={post?.seeker?.firstName}
        lastName={post?.seeker?.lastName}
        seekerId={post?.seeker?.id}
        logo={post.seeker?.profilePic}
        onPressOptions={onPressOptions}
      />

      <DoubleTap doubleTap={likeHandler}>
        <Body
          type={post.type}
          {...post}
          likeAnimation={likeAnimation}
          setlikeAnimation={() => setlikeAnimation(!likeAnimation)}
        />
      </DoubleTap>

      <Footer
        type="seeker"
        likesCount={1}
        caption={post.caption}
        postedAt={post.createdAt}
        username={post.seeker?.firstName}
        onPressShare={onPressShare}
        onPressLike={() => likeHandler('press')}
        isLiked={isLiked}
        post={post}
      />
    </View>
  );
}
