import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientsComponent} from "./clients.component";
import { ClientsListingComponent } from './components/clients-listing/clients-listing.component';
import {RouterModule} from "@angular/router";
import { ClientsFormComponent } from './components/clients-form/clients-form.component';
import { ClientsRegisterComponent } from './components/clients-register/clients-register.component';
import { ClientsEditComponent } from './components/clients-edit/clients-edit.component';
import { ClientsHeaderComponent } from './components/clients-header/clients-header.component';
import { ListComponent } from './components/clients-listing/list-item/list.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {clientsReducer} from "./store/reducer/clients.reducer";
import {ClientsEffects} from "./store/effects/clients.effects";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ClientsComponent, ClientsListingComponent, ClientsFormComponent, ClientsRegisterComponent, ClientsEditComponent, ClientsHeaderComponent, ListComponent],
  imports: [CommonModule, RouterModule.forChild([
    {path: 'listing', component: ClientsListingComponent},
    {path: 'register', component: ClientsRegisterComponent},
    {path: 'edit', component: ClientsEditComponent},
  ]),
    StoreModule.forFeature('clients', clientsReducer),
    EffectsModule.forFeature([ClientsEffects]), FormsModule,

  ],
})
export class ClientsModule {

}
