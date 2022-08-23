import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { Item } from 'src/app/models/Item';
import { DataService, PeriodicElement } from 'src/app/services/data.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
// import { promises as fsPromises } from 'fs';
// import { join } from 'path';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [
    trigger('detailExpandDiv', [
      state('collapsed', style({ height: '0px', minHeight: '0'})),
      state('void', style({ height: '0px', minHeight: '0'})),
      state('expanded', style({ height: '20px' })),
      // transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ItemComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'X'];
  dataSource : PeriodicElement[] = [];

  private item: Item = {
    no:0, 
    symbol:'', 
    wight: '', 
    name: ''
  };

  filter = '';
  filterFields = ['name', 'weight', 'symbol']
  displaydata = [];

  file: any = null;

  constructor(public dialog: MatDialog, private itemService: ItemServiceService, private dataService: DataService) {}

   async ngOnInit(): Promise<void>{ 
      this.runFilter();
      this.changePage(1);
   }

  async changePage(e: any){
    this.dataSource =  this.displaydata;
  }

  // filter by weight
  runFilter() { 
    this.displaydata = JSON.parse(JSON.stringify([...this.dataService.getPeriodicElement()])); 
    if(this.filter != ''){ 
      this.displaydata = this.displaydata.filter(d => String(d['weight']).includes(String(this.filter)))
    }
    this.changePage(1);
  }

  editItem(e: PeriodicElement){
    this.openDialog(e);
  }

  fileBrowse(event: any) {
    this.file = event?.target.files[0];
    console.log(this.file)
    // this.readFile(this.file.name);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      
      console.log(fileReader.result?.slice(0,5))
    }
    fileReader.readAsText(this.file);
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

}
