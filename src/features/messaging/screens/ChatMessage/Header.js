import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { palette, theme } from '../../../../components/Theme';
import ImageS3 from '../../../../components/Image/ImageS3/index';
import LineArrowLeft from '../../../../components/svg/icons/LineArrowLeft';

export default function Header({ otherUser, navigation, conversation }) {
  const names = conversation?.members?.items?.map((val) => {
    return val.seeker.firstName;
  });

  const handleProfileOnPress = () => {


    if (conversation.type == 'CONNECTIONS') {
      navigation.navigate('SeekerProfile', { seekerId: otherUser.id });
    } else if (conversation.type == 'PROVIDER') {
      let providerId = conversation.members.items[0].providerId
      console.log(providerId)
      navigation.navigate('ProviderProfile', { providerId });
    }
  }


  return (
    <View
      style={{
        backgroundColor: palette.white,
        height: 60,
        marginHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <LineArrowLeft width={24} height={24} color={theme.colors.primary} />
      </TouchableOpacity>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        {conversation.type == 'CONNECTIONS' &&
          otherUser != null &&
          otherUser.profilePic && (
            <View style={styles.avatarContainer}>
              <ImageS3 imageObj={otherUser.profilePic} style={styles.logo} />
            </View>
          )}
        {conversation.type == 'GROUP' &&
          conversation.avatar &&
          (
            <View style={styles.avatarContainer}>
              <ImageS3 imageObj={JSON.parse(conversation.avatar)} style={styles.logo} />
            </View>
          )}
        {conversation.type == 'PROVIDER' &&
          conversation.logo &&
          (
            <View style={styles.avatarContainer}>
              <ImageS3 imageObj={conversation.logo} style={styles.logo} />
            </View>
          )}
        {conversation.type == 'CONNECTIONS' && otherUser != null && (
          <TouchableOpacity onPress={handleProfileOnPress}>
            <Text style={styles.name}>
              {otherUser.firstName} {otherUser.lastName}
            </Text>
          </TouchableOpacity>

        )}
        {conversation.type == 'PROVIDER' && (
          <TouchableOpacity onPress={handleProfileOnPress}>
            <Text style={styles.providerTitle} numberOfLines={1}>
              {conversation.title}
            </Text>
          </TouchableOpacity>
        )}
        {conversation.type === 'GROUP' && (
          <View>
            <Text style={styles.groupTitle} numberOfLines={1}>
              {conversation.title}
            </Text>
            <Text style={styles.namelist} numberOfLines={1}>
              {names.join(',')}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: theme.colors.background,
    borderRadius: 100,
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
  statustext: {
    ...theme.typography.regular,
    color: theme.colors.noRouteMap,
  },
  name: {
    ...theme.typography.title3,
    color: theme.colors.selectionItem,
    marginLeft: 15,
    overflow: 'hidden',
    marginTop: 10
    // fontFamily: "SFProDisplay-Semibold"
  },
  groupTitle: {
    ...theme.typography.title3,
    color: theme.colors.selectionItem,
    marginLeft: 15,
    overflow: 'hidden',

    // fontFamily: "SFProDisplay-Semibold"
  },
  providerTitle: {
    ...theme.typography.title3,
    color: theme.colors.selectionItem,
    marginLeft: 15,
    overflow: 'hidden',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 10
    // fontFamily: "SFProDisplay-Semibold"
  },
  groupHeader: {
    ...theme.typography.title3,
    color: theme.colors.selectionItem,
    marginLeft: 15,
    overflow: 'hidden',

    // fontFamily: "SFProDisplay-Semibold"
  },
  namelist: {
    ...theme.typography.caption,
    color: theme.colors.selectionItem,
    marginLeft: 15,
    overflow: 'hidden',
    // fontFamily: "SFProDisplay-Semibold"
  },
  logo: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: theme.radius.l,
    backgroundColor:theme.colors.primary
  },
  avatarContainer: {
    height: 40,
    width: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.radius.l,
    marginLeft: 10,
  },
});
