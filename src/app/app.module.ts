import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './modals/item/item.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
