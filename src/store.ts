import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./reducers";

const initialState = {};
const middleware = [thunk, logger];

export const getStore = () =>
	createStore(
		reducers,
		initialState,
		composeWithDevTools(applyMiddleware(...middleware))
	);
