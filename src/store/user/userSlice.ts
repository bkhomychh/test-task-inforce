import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  name: '',
  surname: '',
  token: '',
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    updateUser(state, { payload }) {
      return { ...state, ...payload };
    },
    resetUser() {
      return userInitialState;
    },
  },

  selectors: {
    selectUser: state => state,
    selectUserName: state => state.name,
    selectToken: state => state.token,
    selectIsLoading: state => state.isLoading,
  },
});

export const userReducer = userSlice.reducer;
export const { updateUser, resetUser } = userSlice.actions;
export const { selectUser, selectUserName, selectToken, selectIsLoading } = userSlice.selectors;
