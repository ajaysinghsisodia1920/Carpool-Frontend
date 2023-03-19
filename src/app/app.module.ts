import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { SearchRideComponent } from './search-ride/search-ride.component';
import { CardComponent } from './card/card.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { OfferingComponent } from './offering/offering.component';
import { RidesHistoryComponent } from './rides-history/rides-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SideComponent } from './side/side.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    HomeComponent,
    BookingComponent,
    SearchRideComponent,
    CardComponent,
    NavComponent,
    LogoComponent,
    OfferingComponent,
    RidesHistoryComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
    timeOut: 2000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
