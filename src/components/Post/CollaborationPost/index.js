import React from 'react';
import {View} from 'react-native';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DoubleTap from '../../../components/DoubleTap';
export default function CollaborationPost({
  collaboration,
  onPressOptions,
  onPressShare,
}) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likeAnimation, setlikeAnimation] = React.useState(false);

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
        firstName={collaboration.owner?.firstName}
        lastName={collaboration.owner?.lastName}
        seekerId={collaboration.owner?.id}
        logo={collaboration.owner?.profilePic}
        onPressOptions={onPressOptions}
      />
      <DoubleTap doubleTap={likeHandler}>
        <Body
          type="COLLABORATION"
          collaboration={collaboration}
          likeAnimation={likeAnimation}
          setlikeAnimation={() => setlikeAnimation(!likeAnimation)}
        />
      </DoubleTap>
      <Footer
        type="COLLABORATION"
        likesCount={1}
        caption={collaboration.caption}
        username={collaboration.owner?.firstName}
        onPressShare={onPressShare}
        postedAt={collaboration.startDate}
        onPressLike={() => likeHandler('press')}
        isLiked={isLiked}
      />
    </View>
  );
}
