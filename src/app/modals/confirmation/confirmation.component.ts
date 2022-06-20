import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

 item: Item = {
    no:0, 
    symbol:'', 
    wight: '', 
    name: ''
  };

  constructor(
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    private itemService: ItemServiceService
  ) {}
  
  ngOnInit(): void {
    this.item = {...this.itemService.getItem()} 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editItem(){

  }

}
