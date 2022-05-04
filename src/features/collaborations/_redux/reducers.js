import createReducer from '../../../lib/createReducer';
import * as types from './types';

const initialState = {
  listLoading: false,
  actionsLoading: false,
  collaborations: [],
  collaborationDetail: undefined,
  collaborationCreated: undefined,
  sorting: {
    sortOrder: 'desc', // asc||desc
    sortField: 'created',
  },
};

export const callTypes = {
  list: 'list',
  action: 'action',
};

export const collaborationsReducer = createReducer(initialState, {
  [types.COLLABORATION_CATCH_ERROR](state, action) {
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
  [types.COLLABORATION_START_CALL](state, action) {
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
  [types.COLLABORATION_COLLABORATIONS_FETCHED](state, action) {
    const {items} = action.payload;

    state.collaborations = items;
    state.listLoading = false;
    state.error = null;
    return {
      ...state,
    };
  },
  [types.COLLABORATION_FETCHED](state, action) {
    const {collaboration} = action.payload;

    state.collaborationDetail = collaboration;
    state.actionsLoading = false;
    state.error = null;
    return {
      ...state,
    };
  },
  [types.COLLABORATION_CREATED](state, action) {
    const {collaboration} = action.payload;

    state.collaborationCreated = collaboration;
    state.error = null;
    state.actionsLoading = false;
    return {
      ...state,
    };
  },
  [types.COLLABORATION_UPDATED](state) {
    state.error = null;
    state.actionsLoading = false;
    return {
      ...state,
    };
  },
  [types.COLLABORATION_MEMBER_CREATED](state) {
    state.error = null;
    state.actionsLoading = false;
    return {
      ...state,
    };
  },
  [types.COLLABORATION_MEMBER_UPDATED](state) {
    state.error = null;
    state.actionsLoading = false;
    return {
      ...state,
    };
  },
  [types.COLLABORATION_CLEAR]() {
    return initialState;
  },
});
