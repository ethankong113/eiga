export const CREATE_BOOK = "CREATE_BOOK";
export const FETCH_BOOK = "FETCH_BOOK";
export const RECEIVE_BOOK = "RECEIVE_BOOK";

export const createBook = source => ({
  source,
  type: CREATE_BOOK
});

export const fetchBook = url => ({
  url,
  type: FETCH_BOOK
});

export const receiveBook = book => ({
  book,
  type: RECEIVE_BOOK
});
