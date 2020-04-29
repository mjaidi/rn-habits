import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import habitsReducer from "./reducers/habits";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  habits: habitsReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
