import { COMMENTS } from "../../app/shared/COMMENTS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('addComment action.payload', action.payload);
            console.log('addComment state.commentsArray', state.commentsArray);
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            }
            state.commentsArray.push(newComment);
        }
    }
});

export const commentsReducer = commentsSlice.reducer;
//this is a method on the object returned by the createSlice() function. 
//It is the reducer function that will be used to update the state in the Redux store.

export const { addComment } = commentsSlice.actions;
//This takes the addComment action creator from the commentsSlice object and exports it as a named export. 
//This allows us to import it into other files and use it to create actions.

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};

