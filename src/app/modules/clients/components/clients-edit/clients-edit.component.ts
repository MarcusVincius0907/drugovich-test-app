import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {getSelectedClient} from "../../store/selectors/clients.selector";
import {Client} from "../../models/clients.model";
import {requestEditClient} from "../../store/actions/clients.action";

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsEditComponent implements OnInit, OnDestroy{

  selectedClient: Client | null = null;

  private subscriptions = new Subscription();

  constructor(private store$: Store, private cdr: ChangeDetectorRef ) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.store$.select(getSelectedClient).subscribe(selectedClient => {
        if(selectedClient){
          this.selectedClient = selectedClient
          this.cdr.markForCheck()
        }

      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  onSave(client: Client){
    this.store$.dispatch(requestEditClient({client}))
  }
}
