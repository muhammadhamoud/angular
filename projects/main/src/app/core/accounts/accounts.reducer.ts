import { createFeature, createReducer, on } from '@ngrx/store';
import * as AccountsActions from './accounts.actions';

export const accountsFeatureKey = 'accounts';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(AccountsActions.loadAccountss, state => state),
  on(AccountsActions.loadAccountssSuccess, (state, action) => state),
  on(AccountsActions.loadAccountssFailure, (state, action) => state),
);

export const accountsFeature = createFeature({
  name: accountsFeatureKey,
  reducer,
});

