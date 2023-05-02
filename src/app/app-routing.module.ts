import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // other routes
  { path: 'clients', loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule) },
  { path: '**', redirectTo: '/clients/listing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
