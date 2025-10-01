import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadListComponent } from './download-list/download-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { ManageRecipieComponent } from './manage-recipie/manage-recipie.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgxPaginationModule } from "ngx-pagination";
import { SearchPipe } from '../Pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    DownloadListComponent,
    UserListComponent,
    RequestListComponent,
    RecipieListComponent,
    ManageRecipieComponent,
    SidebarComponent
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
     SearchPipe,
     FormsModule
]
})
export class AdminModule { }
