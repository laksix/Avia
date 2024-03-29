import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
interface FilterState {
  filter: 'free' | 'fast' | 'optical';
}

const initialState: FilterState = {
  filter: 'free',
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    switchFilter(state, action: PayloadAction<'free' | 'fast' | 'optical'>) {
      state.filter = action.payload;
    },
  },
});

export default FilterSlice.reducer;
