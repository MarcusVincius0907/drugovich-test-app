import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {ClientsService} from "../../services/clients.service";
import {catchError, switchMap} from "rxjs";
import {
  requestEditClient, requestEditClientError, requestEditClientSuccess,
  requestListing,
  requestListingError,
  requestListingSuccess,
  requestRegisterClient, requestRegisterClientError, requestRegisterClientSuccess
} from "../actions/clients.action";
import {ToastrService} from "ngx-toastr";


@Injectable()
export class ClientsEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private clientsService: ClientsService,
    private toastr: ToastrService
  ) {}

  getListingEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestListing),
      switchMap(() =>
        this.clientsService.getListing().pipe(
          switchMap(clients => [requestListingSuccess({ clients })]),
          catchError(error => [requestListingError({ error })]),
        ),
      ),
    ),
  );

  registerClientEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestRegisterClient),
      switchMap((action) =>
        this.clientsService.registerClient(action.client).pipe(
          switchMap(() => {
            this.toastr.success('Sucesso', 'Cliente criado com sucesso');
            return [requestRegisterClientSuccess()]
          }),
          catchError(error => {
            this.toastr.error('Erro', 'Erro ao registrar o cliente');
            return [requestRegisterClientError({error})]
          }),
        ),
      ),
    ),
  );

  editClientEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestEditClient),
      switchMap((action) =>
        this.clientsService.editClient(action.client).pipe(
          switchMap(() => {
            this.toastr.success('Sucesso', 'Cliente editado com sucesso');
            return [requestEditClientSuccess()]
          }),
          catchError(error => {
            this.toastr.error('Erro', 'Erro ao editar o cliente');
            return [requestEditClientError({error})]
          }),
        ),
      ),
    ),
  );

}
