import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './modules/main-page/user/user.component';

const routes: Routes = [
  {path:'', component:UserComponent},
  {path:'user', component:UserComponent},
  // {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
