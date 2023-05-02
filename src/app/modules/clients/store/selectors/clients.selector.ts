import {createSelector} from "@ngrx/store";
import {ClientsState, getClientsState} from "../reducer/clients.reducer";

export const getListing = createSelector(
  getClientsState,
  (state: ClientsState) => state.clients,
);

export const getSelectedClient = createSelector(
  getClientsState,
  (state: ClientsState) => state.selectedClient,
);

export const getLoading = createSelector(getClientsState, (state: ClientsState) => state.loading)
