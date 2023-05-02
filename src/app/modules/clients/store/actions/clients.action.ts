import { createAction, props } from "@ngrx/store";
import { Client } from "../../models/clients.model";

export const requestListing = createAction(
  'Request Listing'
);

export const requestListingSuccess = createAction(
  'Request Listing Success',
  props<{ clients: Client[] }>()
);

export const requestListingError = createAction(
  'Request Listing Error',
  props<{ error: string }>()
);

export const requestRegisterClient = createAction(
  'Request Register Client',
  props<{ client: Client }>()
);

export const requestRegisterClientSuccess = createAction(
  'Request Register Client Success'
);

export const requestRegisterClientError = createAction(
  'Request Register Client Error',
  props<{ error: string }>()
);

export const requestEditClient = createAction(
  'Request Edit Client',
  props<{ client: Client }>()
);

export const requestEditClientSuccess = createAction(
  'Request Edit Client Success'
);

export const requestEditClientError = createAction(
  'Request Edit Client Error',
  props<{ error: string }>()
);

export const setSelectedClient = createAction(
  'Set Selected Client',
  props<{ selectedClient: Client | null }>()
);
