import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsersInfo',
    async (arg, { rejectWithValue }) => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        return data.results;
      }
      catch (error) {
        return rejectWithValue(error.message);
      }
    }
  )

const initialState = {
  userItems: [],
  isLoading: true,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userItems = action.payload;
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice;