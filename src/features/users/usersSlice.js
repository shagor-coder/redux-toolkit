import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    name: 'Shagor',
  },
  {
    id: '2',
    name: 'Hossain',
  },
  {
    id: '3',
    name: 'Hassan',
  },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const selectAllUser = (state) => state.users
export default userSlice.reducer
