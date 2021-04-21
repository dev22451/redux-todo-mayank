import jsonPlaceholder from "../api/JsonPlaceholder";

export const ApiCalling = () => async (dispatch,) => {

    const response = await jsonPlaceholder.post("/todos");
    dispatch({
        type: "API_CALL",
        payload: response.status
    });
};
