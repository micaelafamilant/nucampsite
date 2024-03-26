import { COMMENTS } from "../../app/shared/COMMENTS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: "comments",
    initialState
});

export const commentsReducer = commentsSlice.reducer;
//this is a method on the object returned by the createSlice() function. It is the reducer function that will be used to update the state in the Redux store.

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};

