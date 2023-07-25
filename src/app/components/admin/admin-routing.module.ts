import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: AdminDashboardComponent,
    children: [
      {path: 'contacts', component: ContactsComponent},
      {path: 'contacts/user/:id', component: ContactsDetailComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
