import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { Item } from 'src/app/models/Item';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'X'];
  dataSource = ELEMENT_DATA;

  private item: Item = {
    no:0, 
    symbol:'', 
    wight: '', 
    name: ''
  };

  constructor(public dialog: MatDialog, private itemService: ItemServiceService) {}

  ngOnInit(): void {
  }

  openDialog(e: PeriodicElement): void {
    
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '100%', 
      height: '80%'
    });

    this.item.name = e.name;
    this.item.no = e.position;
    this.item.wight = e.weight.toString();
    this.item.symbol = e.symbol;

    this.itemService.setItem(this.item);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); 
    });
  }

  editItem(e: PeriodicElement){
    this.openDialog(e);
  }

}
