import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OfferingComponent } from './offering/offering.component';
import { RegisterComponent } from './register/register.component';
import { RidesHistoryComponent } from './rides-history/rides-history.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'booking',component:BookingComponent,canActivate:[AuthGuard]},
  {path:'offering',component:OfferingComponent,canActivate:[AuthGuard]},
  {path:'rides-history',component:RidesHistoryComponent,canActivate:[AuthGuard]},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
