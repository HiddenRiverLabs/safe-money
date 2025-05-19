import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list.component';
import { AccountDetailComponent } from './detail/account-detail.component';

const routes: Routes = [
  { path: 'detail', component: AccountDetailComponent },
  { path: 'list', component: AccountListComponent },
  { path: '**' , redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
