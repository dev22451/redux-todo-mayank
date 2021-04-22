import jsonPlaceholder from "../api/JsonPlaceholder";

export const ApiCalling = (todoarr) => async (dispatch, getState) => {
    console.log(todoarr.id)
    const response = await jsonPlaceholder.post("/todos", {
        body: JSON.stringify({ todoarr }), headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    dispatch({
        type: "API_CALL",
        payload: console.log(response.status)
    });
};
