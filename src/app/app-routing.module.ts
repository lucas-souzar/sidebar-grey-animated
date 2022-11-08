import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateRoutesComponent } from './shared/components/layouts/private-routes/private-routes.component';
import { PublicRoutesComponent } from './shared/components/layouts/public-routes/public-routes.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { HomeComponent } from './views/home/home.component';
import { MapsComponent } from './views/maps/maps.component';
import { SecurityComponent } from './views/security/security.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateRoutesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'maps',
        component: MapsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'accounts',
        component: AccountsComponent,
      },
      {
        path: 'security',
        component: SecurityComponent,
      },
    ],
  },
  {
    path: 'login',
    component: PublicRoutesComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
