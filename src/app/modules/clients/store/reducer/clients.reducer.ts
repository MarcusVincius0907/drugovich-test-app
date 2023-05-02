import {Action, createFeatureSelector, createReducer, on} from "@ngrx/store";
import {Client} from "../../models/clients.model";
import {
  requestEditClient, requestEditClientError, requestEditClientSuccess,
  requestListing,
  requestListingError,
  requestListingSuccess, requestRegisterClient, requestRegisterClientError, requestRegisterClientSuccess,
  setSelectedClient
} from "../actions/clients.action";

export const getClientsState = createFeatureSelector<ClientsState>('clients');

export interface ClientsState {
  clients: Client[];
  selectedClient: Client | null;
  loading: boolean;
}

const clientsInitialState: ClientsState = {
  clients: [],
  selectedClient: null,
  loading: false
};

const reducer = createReducer(
  clientsInitialState,

  on(requestListing, (state: ClientsState): ClientsState => {
    return { ...state, loading: true };
  }),
  on(requestListingSuccess, (state: ClientsState, action): ClientsState => {
    return { ...state, clients: action.clients, loading: false };
  }),
  on(requestListingError, (state: ClientsState): ClientsState => {
    return { ...state, loading:false};
  }),

  on(requestEditClient, (state: ClientsState): ClientsState => {
    return { ...state, loading: true };
  }),
  on(requestEditClientSuccess, (state: ClientsState): ClientsState => {
    return { ...state, loading: false };
  }),
  on(requestEditClientError, (state: ClientsState): ClientsState => {
    return { ...state, loading:false};
  }),

  on(requestRegisterClient, (state: ClientsState): ClientsState => {
    return { ...state, loading: true };
  }),
  on(requestRegisterClientSuccess, (state: ClientsState): ClientsState => {
    return { ...state, loading: false };
  }),
  on(requestRegisterClientError, (state: ClientsState): ClientsState => {
    return { ...state, loading:false};
  }),

  on(setSelectedClient, (state: ClientsState, action): ClientsState => {
    return { ...state, selectedClient: action.selectedClient };
  }),
);

export function clientsReducer(state: ClientsState | undefined, action: Action): ClientsState {
  return reducer(state, action);
}
