import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomerSearchComponent} from './customer-search/customer-search.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {ServiceDetailsComponent} from './service-details/service-details.component';
import {RouterModule, Routes} from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import {InputMaskDirective} from './input-mask-directive';

export const appRoutes: Routes = [
  {path: 'customer/:customerId', component: CustomerDetailsComponent},
  {path: 'service/:serviceId', component: ServiceDetailsComponent},
  {path: '', component: CustomerSearchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerSearchComponent,
    CustomerDetailsComponent,
    ServiceDetailsComponent,
    NavigationComponent,
    InputMaskDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
