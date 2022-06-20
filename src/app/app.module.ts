import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './app/modals/item/item.component';
import { ConfirmationComponent } from './modals/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
