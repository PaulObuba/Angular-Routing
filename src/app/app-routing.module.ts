import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenComponent } from './components/women/women.component';
import { MenComponent } from './components/men/men.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'women', component: WomenComponent },
  { path: 'men', component: MenComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
