import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Layout from '../../layout/Layout';

import type TTheme from '../../theme/interfaces/TTheme';
import type IInbox from './interfaces/IInbox';
import CustomText from '../../components/CustomText/CustomText';

function InboxView({ someData }: IInbox) {
  const { colors } = useTheme() as TTheme;

  const styles = StyleSheet.create({

    container: {
      backgroundColor: colors.backgroundGhost,
      paddingHorizontal: 0,
    },
  });

  return (
    <Layout style={styles.container}>
      <CustomText>{someData}</CustomText>
    </Layout>
  );
}

export default InboxView;
