import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
      path:'budget',
      component:SidenavComponent,
      children:[
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path:'profile',
          component:ProfileComponent
        }
      ]
    }
];
