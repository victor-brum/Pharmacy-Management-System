import { Routes } from '@angular/router';
import { BranddrugsComponent } from './branddrugs/branddrugs.component';
import { GenericdrugsComponent } from './genericdrugs/genericdrugs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'branddrugs', component: BranddrugsComponent }, 
    { path: 'genericdrugs', component: GenericdrugsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'perfil', component: PerfilComponent }
];
