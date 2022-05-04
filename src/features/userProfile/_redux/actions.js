//actions
import * as requestFromServer from './crud';
import {callTypes} from './reducers';
import * as types from './types';

export const createSeeker = (seekerCreated, callback) => (dispatch) => {
  dispatch({
    type: types.USER_START_CALL,
    payload: {callType: callTypes.action},
  });

  return requestFromServer
    .createSeeker(seekerCreated)
    .then((response) => {
      const seeker = response.data.createSeeker;
      dispatch({
        type: types.CREATE_SEEKER,
        payload: {seeker},
      });

      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      console.log(error);

      error.clientMessage = "Can't create user";
      dispatch({
        type: types.ON_ERROR,
        payload: {error, callType: callTypes.action},
      });
    });
};

export const updateSeeker = (seekerUpdated) => (dispatch) => {
  dispatch({
    type: types.USER_START_CALL,
    payload: {callType: callTypes.action},
  });
  return new Promise((resolve) => {
    resolve(
      requestFromServer
        .updateSeeker(seekerUpdated)
        .then((response) => {
          const seeker = response.data.updateSeeker;
          dispatch({
            type: types.UPDATE_SEEKER,
            payload: {seeker},
          });
        })
        .catch((error) => {
          console.log(error);

          error.clientMessage = 'Cannot update ';
          dispatch({
            type: types.ON_ERROR,
            payload: {error, callType: callTypes.action},
          });
        }),
    );
  });
};

export const completeSeekerProfile = () => (dispatch) => {
  dispatch({
    type: types.COMPLETE_SEEKER_PROFILE,
  });
};

export const getSeeker = (email, callback) => (dispatch) => {
  dispatch({
    type: types.USER_START_CALL,
    payload: {callType: callTypes.list},
  });

  const queryParams = {
    filter: {email: {eq: email}},
    filterRouteMaps: {status: {eq: 1}},
    filterPosts: {status: {eq: 1}},
    filterFriends: {status: {eq: 1}},
    filterOpportunities: {status: {eq: 1}},
    filterCollaborations: {status: {eq: 1}},
  };

  return requestFromServer
    .listSeeker(queryParams)
    .then((response) => {
      const {items} = response.data.listSeekers;
      dispatch({
        type: types.GET_SEEKER,
        payload: {items},
      });
      if (callback) {
        callback(items);
      }
    })
    .catch((error) => {
      console.log(error);

      error.clientMessage = "Can't list user";
      dispatch({
        type: types.ON_ERROR,
        payload: {error, callType: callTypes.action},
      });
    });
};

export const clear = () => (dispatch) => {
  dispatch({
    type: types.USER_PROFILE_CLEAR,
  });
};
