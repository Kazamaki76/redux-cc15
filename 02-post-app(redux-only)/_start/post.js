const { createStore } = require("redux");
/*  
post = {id:number, title: string }
posts = Array<post> == Array<{id:number, title: string }>
*/

// initailState
const initailState = {
  posts: [],
};
// action
// action type
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
// Action Creator
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

// reducer
const postsReducer = (state = initailState, action) => {
  if (action.type === ADD_POST) {
    return { posts: [...state.posts, action.payload] };
  }
};

//store
