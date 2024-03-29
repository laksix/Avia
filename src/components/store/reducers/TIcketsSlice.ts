import { createSlice } from '@reduxjs/toolkit';
import { ITicket } from '../../models/Tickets';
import { PayloadAction } from '@reduxjs/toolkit';

export interface IinitialState {
  tickets: ITicket[];
  isLoading: boolean;
  error: boolean;
  count: number;
  ID: any;
}

const initialState: IinitialState = {
  tickets: [],
  isLoading: false,
  error: false,
  count: 0,
  ID: 0,
};

export const TicketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    ticketsStartFetch(state) {
      state.isLoading = true;
    },
    ticketsFetching(state, ID) {
      state.ID = ID.payload;
    },
    ticketsFetchingSuccess(state, action: PayloadAction<ITicket[]>) {
      state.tickets = [...state.tickets, ...action.payload];
      state.count++;
      state.error = false;
    },
    ticketsStopFetch(state) {
      state.isLoading = false;
    },
    ticketsFetchingError(state, action: PayloadAction<boolean>) {
      state.count++;
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export default TicketsSlice.reducer;
