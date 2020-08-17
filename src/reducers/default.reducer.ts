import { DEFAULT } from "./../actions/types";
const initialState = {
	default: null,
};
export const defaultReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case DEFAULT:
			return {
				...state,
				default: action.payload,
			};

		default:
			return state;
	}
};
