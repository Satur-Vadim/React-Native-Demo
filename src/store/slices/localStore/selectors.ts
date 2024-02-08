import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';

const selfLocalStore = (state: RootState) => state.localStore;

export const isWelcomeScreenPassedSelector = createSelector(
  [selfLocalStore],
  ({ isWelcomeScreenPassed }) => isWelcomeScreenPassed,
);
