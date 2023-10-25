const { createStore, combineReducers } = require("redux");
/*  
post = {id:number, title: string }
posts = Array<post> == Array<{id:number, title: string }>
*/

// initailState
const initailState = {
  posts: [],
};
const initailUsersState = {
  users: [], //Array < {id: number, name:string}>
};

// action
const ADD_USER = "ADD_USER";
const DELETE_USER = "DELETE_USER";

const addUserAction = (id, name) => {
  return {
    type: ADD_USER,
    payload: {
      id,
      name, 
    },
  };
};

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

const deletePostAction = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};

const editPostAction = (id, title) => {
  return {
    type: EDIT_POST,
    payload: { id: id, title: title },
  };
};

// reducer FN 2 Parameter
const postsReducer = (state = initailState, action) => {
  if (action.type === ADD_POST) {
    return { posts: [...state.posts, action.payload] };
  } else if (action.type === DELETE_POST) {
    const newPosts = state.posts.filter((post) => post.id !== action.payload);
    return { posts: newPosts };
  } else if (action.type === EDIT_POST) {
    const updatedPost = state.posts.map((post) =>
      post.id === action.payload.id ? action.payload : post
    );
    return { posts: updatedPost };
  }
};

// users reducer
const usersReducer = (state = initailUsersState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { users: [...state.users, action.payload] };
    default:
      return state;
  }
};

//  combine reducer

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer``,
});

//store
const store = createStore(rootReducer);
console.log(store);

store.subscribe(() => {
  const state = store.getState();
  console.log(">>", state.post);
  console.log(">>",state.users)
});

store.dispatch(addPostAction({ id: 1, title: "HTML" }));;
store.dispatch(addUserAction(1, "codecamp"));
store.dispatcha(adddPostAction({id :2,  }))
// store.dispatch(addPostAction({ id: 2, title: "CSS" }));
// store.dispatch(addPostAction({ id: 3, title: "REACT" }));

// // store.dispatch(deletePostAction(1));
// store.dispatch(editPostAction(id=3, title="prisma"))
