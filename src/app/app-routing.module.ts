import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { adminActivateGuard } from './guards/admin-activate.guard';
import { adminDeactivateGuard } from './guards/admin-deactivate.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin',
    canActivate: [adminActivateGuard],
    canDeactivate: [adminDeactivateGuard],
    loadChildren: () => import('./components/admin/admin.module').then( (module) => module.AdminModule )
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
