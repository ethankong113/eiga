export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMNETS';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RENEW_COMMENT = 'RENEW_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const createComment = comment => ({
  comment,
  type: CREATE_COMMENT
});

export const updateComment = (commentId, body) => ({
  commentId,
  body,
  type: UPDATE_COMMENT
});

export const deleteComment = commentId => ({
  commentId,
  type: DELETE_COMMENT
});

export const getAllComments = url => ({
  url,
  type: GET_ALL_COMMENTS
});

export const receiveAllComments = comments => ({
  comments,
  type: RECEIVE_ALL_COMMENTS
});

export const receiveComment = comment => ({
  comment,
  type: RECEIVE_COMMENT
});

export const renewComment = comment => ({
  comment,
  type: RENEW_COMMENT
});

export const removeComment = comment => ({
  comment,
  type: REMOVE_COMMENT
});
