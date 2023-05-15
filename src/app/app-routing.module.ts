import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorfolioComponent } from './component/porfolio/porfolio.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: 'porfolio', component:PorfolioComponent },
  {path:'' ,redirectTo:'porfolio',pathMatch: 'full' },
  {path:'login', component: LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
