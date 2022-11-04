import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateRoutesComponent } from './shared/components/layouts/private-routes/private-routes.component';
import { PublicRoutesComponent } from './shared/components/layouts/public-routes/public-routes.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateRoutesComponent,
    children: [],
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
