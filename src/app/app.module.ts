import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import {RouterModule, Routes} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

export const appRoutes: Routes = [
  {path: '', component: CustomerSearchComponent},
  {path: 'service/:serviceId', component: ServiceDetailsComponent},
  {path: 'customer/:customerId', component: CustomerDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerSearchComponent,
    CustomerDetailsComponent,
    ServiceDetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
