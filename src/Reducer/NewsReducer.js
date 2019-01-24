const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  news: []
};

const reducer = function(state = initialState, action){
  switch (action.type) {
      case 'FETCH_NEWS_PENDING':
        return{...state, fetching: true};
        break;
      case 'FETCH_NEWS_FULFILLED':
        return{...state, fetching: false, fetched: true, news: action.payload.data.articles};
        break;
      case 'FETCH_NEWS_REJECTED':
        return{...state, fetching: false, error: action.payload};
        break;
      default:
  }
  return state;
}
export default reducer;
