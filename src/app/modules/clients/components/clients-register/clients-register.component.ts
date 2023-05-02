import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Client} from "../../models/clients.model";
import {Store} from "@ngrx/store";
import {requestRegisterClient} from "../../store/actions/clients.action";

@Component({
  selector: 'clients-register',
  templateUrl: './clients-register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsRegisterComponent {

  constructor(private store$: Store) {
  }

  onSave(client: Client){
    this.store$.dispatch(requestRegisterClient({client}))
  }
}
