import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { SolicitationsComponent } from './features/solicitations/pages/solicitations/solicitations.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'solicitations', component: SolicitationsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];
