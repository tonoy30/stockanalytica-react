import { DEFAULT } from "./types";
import { Dispatch } from "redux";

export const defaultAction = () => (dispatch: Dispatch) => {
	dispatch({
		type: DEFAULT,
		payload: "DEFAULT",
	});
};
