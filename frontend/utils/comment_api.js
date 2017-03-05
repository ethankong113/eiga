export const createCommentAJAX = (comment, success, error) => {
  $.ajax({
     type: 'POST',
     url: 'api/comments',
     data: {comment},
     success,
     error
   });
};

export const updateCommentAJAX = (commentId, body, success, error) => {
  $.ajax({
     type: 'PUT',
     url: `api/comments/${commentId}`,
     data: {body},
     success,
     error
   });
};

export const deleteCommentAJAX = (commentId, success, error) => {
  $.ajax({
     type: 'DELETE',
     url: `api/comments/${commentId}`,
     success,
     error
   });
};

export const getAllCommentsAJAX = (url, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/books/${url}/comments`,
     success,
     error
   });
};
