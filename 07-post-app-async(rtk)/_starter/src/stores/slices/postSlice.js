import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../utils/apiURL";

const initialState = {
  postData: [],
  loading: false,
  error: "",
};
//  thunk action creator => 1 fn มาจาก 3fn ย่อย = 4 fn (redux only)
// thunk action createor => 1fn only (redux toolkit + createAsyncThunk)

// AutoGenerate 3 sate of promise
//  เขียน  1 ได้ถึง 3
// posts/fetchPosts/pending
//  seccess
//   rejected

// Thunj action creator = async action creator
export const fetchPostsAction = createAsyncThunk(
  "posts/fetchPosts",
  async (payload, thunkAPI) => {
    try {
      // make http request
      const response = await axios.get(apiUrl);
      console.log(response.data);
      return response.data; // return action.payload ของ fullfill
    } catch (error) {
    //   console.log(error);
    return thunkAPI.rejectWithValue("error") // return action.pauload ของ case rejected
    }
  }
);

const postSlice = createSlice({
  name: "postSlice",
  initialState: initialState,
  reducers: {
    // method : SYNC operation
  },
  extraReducers: (builder) => {
    // Handle Async Operation
    builder
    .addCase(fetchPostsAction.pending, (state,action  ) => {
        state.payload.postData = [];
        state.loading = true;
        state.error = ""
    })
    .addCase(fetchPostsAction.fulfilled, (state, action) => {
      state.postData = action.payload;
      state.loading = false;
      state.error ="" ;
    })
    .addCase(fetchPostsAction.rejected, (state, action) => {
        state.postData = []
        state.loading = false
        console.log(action.payload)
        state.error = action.payload        
    })
  },
});

//  gen post reducer
const postReducer = postSlice.reduer;
export default postReducer;
