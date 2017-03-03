export const createBookAJAX = (source, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'api/books',
    data: {source},
    success,
    error
  });
};

export const fetchBookAJAX = (url, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/books/${url}`,
     success,
     error
   });
};
