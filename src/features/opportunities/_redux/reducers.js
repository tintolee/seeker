import createReducer from '../../../lib/createReducer';
import * as types from './types';

const initialState = {
  listLoading: false,
  actionsLoading: false,
  opportunities: [],
  opportunityDetail: undefined,
  sorting: {
    sortOrder: 'desc', // asc||desc
    sortField: 'created',
  },
};

export const callTypes = {
  list: 'list',
  action: 'action',
};

export const opportunitiesReducer = createReducer(initialState, {
  [types.OPPORTUNITY_CATCH_ERROR](state, action) {
    state.error = `${action.type}: ${action.payload.error}`;
    if (action.payload.callType === callTypes.list) {
      state.listLoading = false;
    } else {
      state.actionsLoading = false;
    }
    return {
      ...state,
    };
  },
  [types.OPPORTUNITY_START_CALL](state, action) {
    state.error = null;
    if (action.payload.callType === callTypes.list) {
      state.listLoading = true;
    } else {
      state.actionsLoading = true;
    }
    return {
      ...state,
    };
  },
  [types.OPPORTUNITY_OPPORTUNITIES_FETCHED](state, action) {
    const {items} = action.payload;

    state.opportunities = items;
    state.listLoading = false;
    state.error = null;
    return {
      ...state,
    };
  },
  [types.OPPORTUNITY_FETCHED](state, action) {
    const {opportunity} = action.payload;

    state.opportunityDetail = opportunity;
    state.actionsLoading = false;
    state.error = null;
    return {
      ...state,
    };
  },
  [types.OPPORTUNITY_ATTEENDE_CREATED](state) {
    state.error = null;
    state.actionsLoading = false;
    return {
      ...state,
    };
  },
  [types.OPPORTUNITY_ATTENDEE_UPDATED](state) {
    state.error = null;
    state.actionsLoading = false;
    return {
      ...state,
    };
  },
  [types.OPPORTUNITY_CLEAR]() {
    return initialState;
  },
});
