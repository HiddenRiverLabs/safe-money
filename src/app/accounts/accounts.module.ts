import { NgModule } from '@angular/core';
import { AccountListComponent } from './account-list.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountDetailComponent } from './detail/account-detail.component';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountDetailComponent
  ],
  imports: [
    AccountRoutingModule,
  ],
  providers: []
})
export class AccountModule { }
