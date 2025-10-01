import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadListComponent } from './download-list/download-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { RequestListComponent } from './request-list/request-list.component';
import { ManageRecipieComponent } from './manage-recipie/manage-recipie.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'downloadlist', component:DownloadListComponent
  },
   {
    path:'userslist', component:UserListComponent
  },
   {
    path:'recipielist', component:RecipieListComponent
  },
   {
    path:'requestlist', component:RequestListComponent
  },
   {
    path:'recipielist/recipie/add', component:ManageRecipieComponent
  },
   {
    path:'recipielist/recipie/edit/:id', component:ManageRecipieComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
