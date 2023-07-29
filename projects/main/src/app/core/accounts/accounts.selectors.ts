import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAccounts from './accounts.reducer';

export const selectAccountsState = createFeatureSelector<fromAccounts.State>(
  fromAccounts.accountsFeatureKey
);
