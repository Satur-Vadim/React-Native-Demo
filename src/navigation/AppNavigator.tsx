import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import CodePushManager from '../components/CodePushManager/CodePushManager';
import InternetLostModal from '../components/InternetLostModal/InternetLostModal';
import Notification from '../components/Notification/Notification';
import { useAppSelector } from '../store/hooks/useApp';
import {
  appSelector, topNotificationSelector,
} from '../store/slices/general/selectors';
import theme from '../theme/theme';
import useUniqueId from '../utils/hooks/useUniqueId';
import MainStackNavigator from './MainStackNavigator';
import navigationRef from './RootNavigation';

function AppNavigator() {
  const topNotification = useAppSelector(topNotificationSelector);
  const { isDisconnected } = useAppSelector(appSelector);

  useUniqueId();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme} ref={navigationRef}>
        <Notification
          visible={!!topNotification}
          text={topNotification?.text || ''}
          type={topNotification?.type}
          showAlways={topNotification?.showAlways}
          withLeftIcon={topNotification?.withLeftIcon}
        />
        <MainStackNavigator />
        <InternetLostModal isModalOpen={isDisconnected} />
      </NavigationContainer>
      <CodePushManager />
    </SafeAreaProvider>
  );
}

export default AppNavigator;
