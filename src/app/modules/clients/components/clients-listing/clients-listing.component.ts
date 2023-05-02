import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Client} from "../../models/clients.model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {getListing, getLoading} from "../../store/selectors/clients.selector";
import {requestListing, setSelectedClient} from "../../store/actions/clients.action";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'clients-listing',
  templateUrl: './clients-listing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsListingComponent implements OnInit, OnDestroy{
  list: Array<Client> = []

  loading$: Observable<boolean> | undefined

  private subscriptions = new Subscription();

  constructor(private router: Router, private store$: Store, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(){

    this.loading$ = this.store$.select(getLoading)

    this.subscriptions.add(
      this.store$.select(getListing).subscribe(clients => {
        if(clients){
          this.list = clients
          this.cdr.markForCheck();
        }
      })
    )

    this.store$.dispatch(requestListing())
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  registerClient(){
    this.router.navigate(['/clients/register'])
  }

  editClient(client: Client){
    this.store$.dispatch(setSelectedClient({selectedClient: client}))
    this.router.navigate(['/clients/edit'])
  }
}
