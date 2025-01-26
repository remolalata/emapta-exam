import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '~root/types/user';

interface UserState {
  data: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  selectedUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.data = action.payload;
      state.error = null;
    },
    setSelectedUser(state, action: PayloadAction<string>) {
      state.selectedUser = state.data.find((user) => user.id === action.payload) || null;
    },
    addUser(state, action: PayloadAction<User>) {
      state.data.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUsers, addUser, deleteUser, setSelectedUser, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;