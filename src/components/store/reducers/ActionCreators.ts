import axios from 'axios';
import { AppDispatch } from '../store';
import { TicketsSlice } from './TIcketsSlice';
import { ITickets } from '../../models/Tickets';
export const createID = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(TicketsSlice.actions.ticketsStartFetch());
    const responseID = await axios.get(`https://aviasales-test-api.kata.academy/search`);
    const ID = responseID.data.searchId;
    dispatch(TicketsSlice.actions.ticketsFetching(ID));
  } catch (e) {
    return null;
  }
};

export const fetchTickets = (id) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<ITickets>(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
    if (!response.data.stop) {
      dispatch(TicketsSlice.actions.ticketsFetchingSuccess(response.data.tickets));
    } else dispatch(TicketsSlice.actions.ticketsStopFetch());
  } catch (e: any) {
    dispatch(TicketsSlice.actions.ticketsFetchingError(e.status));
  }
};
