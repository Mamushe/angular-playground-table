import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './modals/item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms'; 
import { MatTableModule } from '@angular/material/table';
import {
  MatInputModule,
} from '@angular/material/input';
import {
  MatDialogModule,
} from '@angular/material/dialog';
import {
  MatFormFieldModule,
} from '@angular/material/form-field';
 
import { ConfirmationComponent } from './modals/confirmation/confirmation.component';

// import {  } from '@angular/material/searchbar';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule, 
    BrowserAnimationsModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
