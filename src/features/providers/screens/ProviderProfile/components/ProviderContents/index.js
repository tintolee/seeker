import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ContentPost from '../../../../../../components/Post/ContentPost';
import OpportunityPost from '../../../../../../components/Post/OpportunityPost';
import styles from './styles';

export default function ProviderContents({contents, opportunities, userId}) {
  const navigation = useNavigation();

  const handleOnPressShare = (post) => {
    navigation.navigate('Share', {post});
  };

  return (
    <View style={styles.container}>
      {contents &&
        contents.items &&
        contents.items.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)).map((item, index) => (
          <ContentPost
            key={index}
            content={item}
            onPressShare={() => handleOnPressShare(item)}
          />
        ))}
      {opportunities &&
        opportunities.items &&
        
        opportunities.items.sort((a, b)=>new Date(b.date) - new Date(a.date)).map((item, index) => (
          <OpportunityPost
            key={index}
            opportunity={item}
            userId={userId}
            onPressShare={() => handleOnPressShare(item)}
          />
        ))}
    </View>
  );
}
