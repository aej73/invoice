import { InvoicePage } from './../invoice/invoice';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Iitems } from '../../data/invoiceItems.interface';
import invoices from '../../data/invoiceData';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

invoiceCollection:{invoice:string,name:string,address:string, city:string,state:string, items:Iitems[]}[];

  constructor(public navCtrl: NavController, navParam: NavParams) {

  }
  ngOnInit(){
    this.invoiceCollection = invoices;
    console.log('The invoice collection is: ', this.invoiceCollection);
  }
  invoiceDetails(invoiceNumber:string,custName:string, custAddress:string, custCity:string, custState:string, items:string[]){
          this.navCtrl.push(InvoicePage,{id:invoiceNumber,name:custName,address:custAddress,city:custCity,state:custState,purchasedItems:items});
  }

}
