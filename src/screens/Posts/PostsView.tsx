import React from 'react';
import {
  ActivityIndicator, RefreshControl, StyleSheet, View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Tabs } from 'react-native-collapsible-tab-view';
import { useTheme } from '@react-navigation/native';

import EmptyList from '../../components/EmptyList/EmptyList';
import TabBar from '../../components/TabBar/TabBar';
import Layout from '../../layout/Layout';
import useAppNavigation from '../../navigation/hooks/useAppNavigation';
import PostItem from './components/PostItem';
import Separator from './components/Separator';

import type TTheme from '../../theme/interfaces/TTheme';

import InfoErrorIcon from '../../assets/images/svg/infoError.svg';

function PostsView() {
  const { colors } = useTheme() as TTheme;
  const { t } = useTranslation();
  const { navigate } = useAppNavigation();

  const styles = StyleSheet.create({
    layout: {
      backgroundColor: colors.backgroundGhost,
      paddingHorizontal: 0,
      position: 'relative',
    },
    filterContainer: {
      flexDirection: 'row',
      width: '100%',
      gap: 14,
      paddingHorizontal: 16,
      marginBottom: 12,
    },
    modalContentContainerStyle: {
      paddingBottom: 40,
    },
    sectionHeader: {
      paddingHorizontal: 16,
    },
    listContainer: {
      paddingTop: 12,
      paddingBottom: 36,
      paddingHorizontal: 16,
      flexGrow: 1,
    },
    btn: {
      position: 'absolute',
      bottom: 16,
      width: 48,
      right: 16,
      borderRadius: 24,
      overflow: 'hidden',
    },
    indicator: {
      marginVertical: 8,
    },
    loader: {
      flex: 1,
    },
    textEmptyList: {
      marginTop: 12,
      color: colors.fontPrimary,
    },
    tabsHeader: {
      shadowOpacity: 0,
      borderBottomColor: colors.grey,
      borderBottomWidth: 1,
    },
    filterItem: {
      flex: 1,
    },
  });

  return (
    <Layout style={styles.layout}>
      {/*{isLoading ? (*/}
      {/*  <ActivityIndicator style={styles.loader} />*/}
      {/*) : (*/}
      {/*<Tabs.Container*/}
      {/*    headerContainerStyle={styles.tabsHeader}*/}
      {/*    renderTabBar={(props) => (*/}
      {/*      <View pointerEvents="box-none">*/}
      {/*        <TabBar*/}
      {/*          tabContainerStyle={{ backgroundColor: colors.backgroundGhost }}*/}
      {/*          {...props}*/}
      {/*        />*/}
      {/*      </View>*/}
      {/*    )}*/}
      {/*  >*/}
      {/*    <Tabs.Tab name="upcoming" label={`${t('upcoming')}`}>*/}
      {/*      <Tabs.FlatList*/}
      {/*        data={[]}*/}
      {/*        renderItem={({*/}
      {/*          item: {},*/}
      {/*        }) => (*/}
      {/*          <PostItem />*/}
      {/*        )}*/}
      {/*        onEndReached={readMoreGames}*/}
      {/*        onEndReachedThreshold={0.02}*/}
      {/*        scrollEventThrottle={250}*/}
      {/*        ItemSeparatorComponent={Separator}*/}
      {/*        contentContainerStyle={styles.listContainer}*/}
      {/*        ListEmptyComponent={(*/}
      {/*          <EmptyList*/}
      {/*            icon={<InfoErrorIcon color={colors.iconSecondary} />}*/}
      {/*            text={t('noUpcomingGames')}*/}
      {/*            styleText={styles.textEmptyList}*/}
      {/*          />*/}
      {/*        )}*/}
      {/*        keyExtractor={({ id }) => `upcoming_game_${id}`}*/}
      {/*        ListFooterComponent={!isLastPage && isFetching && !isLoading*/}
      {/*          ? <ActivityIndicator style={styles.indicator} />*/}
      {/*          : null}*/}
      {/*        refreshControl={(*/}
      {/*          <RefreshControl*/}
      {/*            refreshing={isFetching}*/}
      {/*            onRefresh={onRefresh}*/}
      {/*          />*/}
      {/*        )}*/}
      {/*      />*/}
      {/*    </Tabs.Tab>*/}
      {/*    <Tabs.Tab name="live" label={`${t('live')}`}>*/}
      {/*      <Tabs.FlatList*/}
      {/*        data={[]}*/}
      {/*        renderItem={({*/}
      {/*          item: {},*/}
      {/*        }) => (*/}
      {/*          <PostItem />*/}
      {/*        )}*/}
      {/*        onEndReached={readMoreLiveGames}*/}
      {/*        onEndReachedThreshold={0.02}*/}
      {/*        scrollEventThrottle={250}*/}
      {/*        ItemSeparatorComponent={Separator}*/}
      {/*        contentContainerStyle={styles.listContainer}*/}
      {/*        ListEmptyComponent={(*/}
      {/*          <EmptyList*/}
      {/*            icon={<InfoErrorIcon color={colors.iconSecondary} />}*/}
      {/*            text={t('noLiveGames')}*/}
      {/*            styleText={styles.textEmptyList}*/}
      {/*          />*/}
      {/*        )}*/}
      {/*        keyExtractor={({ id }) => `live_game_${id}`}*/}
      {/*        ListFooterComponent={!isLastLivePage && isFetching && !isLoading*/}
      {/*          ? <ActivityIndicator style={styles.indicator} />*/}
      {/*          : null}*/}
      {/*        refreshControl={(*/}
      {/*          <RefreshControl*/}
      {/*            refreshing={isFetching}*/}
      {/*            onRefresh={onRefresh}*/}
      {/*          />*/}
      {/*        )}*/}
      {/*      />*/}
      {/*    </Tabs.Tab>*/}
      {/*    <Tabs.Tab name="final" label={`${t('final')}`}>*/}
      {/*      <Tabs.FlatList*/}
      {/*        data={[]}*/}
      {/*        renderItem={({*/}
      {/*          item: {},*/}
      {/*        }) => (*/}
      {/*          <PostItem />*/}
      {/*        )}*/}
      {/*        onEndReached={readMoreFinalGames}*/}
      {/*        onEndReachedThreshold={0.02}*/}
      {/*        scrollEventThrottle={250}*/}
      {/*        ItemSeparatorComponent={Separator}*/}
      {/*        contentContainerStyle={styles.listContainer}*/}
      {/*        ListEmptyComponent={(*/}
      {/*          <EmptyList*/}
      {/*            icon={<InfoErrorIcon color={colors.iconSecondary} />}*/}
      {/*            text={t('noFinalGames')}*/}
      {/*            styleText={styles.textEmptyList}*/}
      {/*          />*/}
      {/*        )}*/}
      {/*        keyExtractor={({ id }) => `final_game_${id}`}*/}
      {/*        ListFooterComponent={!isLastFinalPage && isFetching && !isLoading*/}
      {/*          ? <ActivityIndicator style={styles.indicator} />*/}
      {/*          : null}*/}
      {/*        refreshControl={(*/}
      {/*          <RefreshControl*/}
      {/*            refreshing={isFetching}*/}
      {/*            onRefresh={onRefresh}*/}
      {/*          />*/}
      {/*        )}*/}
      {/*      />*/}
      {/*    </Tabs.Tab>*/}
      {/*  </Tabs.Container>*/}
      {/*)}*/}
    </Layout>
  );
}

export default PostsView;
