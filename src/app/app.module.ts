import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateRoutesComponent } from './shared/components/layouts/private-routes/private-routes.component';
import { PublicRoutesComponent } from './shared/components/layouts/public-routes/public-routes.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivateRoutesComponent,
    PublicRoutesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
