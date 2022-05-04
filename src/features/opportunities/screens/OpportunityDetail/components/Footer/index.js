import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {
  HeartFill,
  CommentFill,
  CombinedShape,
  BookmarkFill,
} from '../../../../../../components/svg/icons';

import styles from './styles';

const Footer = ({likesCount, caption, username, postedAt}) => {
  const onLikePressed = () => {
    console.log('onLikePressed');
  };
  const onPressShare = () => {
    console.log('onPressShare');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => onLikePressed()}>
            <HeartFill width={24} height={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            <CommentFill width={24} height={24} color="#000" />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={onPressShare}>
            <CombinedShape width={24} height={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            <BookmarkFill width={24} height={24} color="#000" />
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={styles.likesContainer}>
        <Text style={styles.likes}>{likesCount} Likes</Text>
      </View>

      <Text style={styles.caption}>
        <Text style={styles.username}>{username} </Text>
        {caption}
      </Text>
      <Text style={styles.postedAt}>
        {postedAt && moment(postedAt).startOf('hour').fromNow()}
      </Text>
    </View>
  );
};

export default Footer;
