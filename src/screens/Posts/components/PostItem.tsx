import React from 'react';
import { StyleSheet } from 'react-native';

import Avatars from '../../../components/Avatars/Avatars';
import BaseButton from '../../../components/BaseButton/BaseButton';
import GameTeamsTitle from '../../../components/GameTeamsTitle/GameTeamsTitle';
import { WHITE } from '../../../constants/general';
import useAppNavigation from '../../../navigation/hooks/useAppNavigation';
import useMatchInformation from '../../../utils/hooks/useMatchInformation';
import GameDate from './GameDate';

import type IPostsItem from '../interfaces/IPostsItem';

function PostItem({
  id, teamA, teamB, startTime, timezone,
}: IPostsItem) {
  const { navigate } = useAppNavigation();

  const {
    matchDay, matchTime, teamAName, teamBName, avatars,
  } = useMatchInformation(teamA, teamB, new Date(startTime), timezone);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: 16,
    },
    content: {
      flex: 1,
    },
  });

  return (
    <BaseButton
      style={styles.container}
      theme={WHITE}
      renderLeftIcon={() => <Avatars avatars={avatars} size={40} />}
      isChildrenComponent
      isPlaceholderComponent
      placeholder={<GameDate matchDay={matchDay} matchTime={matchTime} />}
      textContainerStyle={styles.content}
      onPress={() => navigate('GameDetailsStatKeeper', { id })}
    >
      <GameTeamsTitle teamAName={teamAName} teamBName={teamBName} />
    </BaseButton>
  );
}

export default PostItem;
