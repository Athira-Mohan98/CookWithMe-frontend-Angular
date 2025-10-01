import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { SavedRecipieComponent } from './saved-recipie/saved-recipie.component';
import { ViewRecipieComponent } from './view-recipie/view-recipie.component';
import { ProfileComponent } from './profile/profile.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    
    //lazy loaded modules : http:localhost:4200/admin

    {
        path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
    },
    {
        path:'', component:HomeComponent,
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'contact', component:ContactComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'register', component:RegisterComponent
    },
    {
        path:'All-Recipies',component:RecipiesComponent
    },
     {
        path:'Saved-Recipies',component:SavedRecipieComponent
    },
     {
        path:'View-Recipie/:id',component:ViewRecipieComponent
    },
     {
        path:'profile',component:ProfileComponent
    },
     {
        path:'**',component:PnfComponent
    },
];
