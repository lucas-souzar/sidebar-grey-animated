import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateRoutesComponent } from './shared/components/layouts/private-routes/private-routes.component';
import { PublicRoutesComponent } from './shared/components/layouts/public-routes/public-routes.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { HomeComponent } from './views/home/home.component';
import { MapsComponent } from './views/maps/maps.component';
import { SettingsComponent } from './views/settings/settings.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { SecurityComponent } from './views/security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivateRoutesComponent,
    PublicRoutesComponent,
    NotFoundComponent,
    SidebarComponent,
    ToolbarComponent,
    HomeComponent,
    MapsComponent,
    SettingsComponent,
    AccountsComponent,
    SecurityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
