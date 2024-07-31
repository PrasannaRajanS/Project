import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddfieldsComponent } from './masterdata/addfields/addfields.component';
import { ListfieldsComponent } from './masterdata/listfields/listfields.component';

@NgModule({
  declarations: [
    AppComponent,
    AddfieldsComponent,
    ListfieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
