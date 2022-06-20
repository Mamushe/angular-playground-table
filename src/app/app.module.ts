import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './modals/item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatTableModule } from '@angular/material/table';
import {
  MatInputModule,
} from '@angular/material/input';
// import {  } from '@angular/material/searchbar';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
