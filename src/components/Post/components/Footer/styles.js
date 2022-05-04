import {StyleSheet} from 'react-native';
import {theme, width, height} from '../../../Theme';

const styles = StyleSheet.create({
  container: {
    margin: theme.spacing.sm,
    paddingBottom: theme.spacing.m
  },
  iconsContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.sm,
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing.m,
  },
  likesContainer: {
    marginBottom: theme.spacing.sm,
  },
  likes: {
    ...theme.typography.caption,
    fontWeight: 'bold',
  },
  username: {
    ...theme.typography.caption,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    color: '#262626',
  },
  caption: {
    ...theme.typography.caption,
    letterSpacing: 0.2,
    marginBottom: theme.spacing.s,
  },
  postedAt: {
    ...theme.typography.regular,
    color: '#8c8c8c',
  },
});

export default styles;
