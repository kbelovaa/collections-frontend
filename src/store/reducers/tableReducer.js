import { SET_USERS, SET_PAGE, SET_TOTAL_COUNT } from '../../constants/actionsRedux';

const defaultState = {
  users: [],
  page: 1,
  limit: 10,
  totalCount: 0,
};

const tableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...action.payload] };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    default:
      return state;
  }
};

export default tableReducer;
