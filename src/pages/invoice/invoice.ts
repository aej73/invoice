import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage implements OnInit {
  itemList:string[];
  invNum:string;
  invName:string;
  invAddress:string;
  invCity:string;
  invState:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.invNum = this.navParams.get('id');
    this.invName = this.navParams.get('name');
    this.invAddress = this.navParams.get('address');
    this.invCity = this.navParams.get('city');
    this.invState = this.navParams.get('state');
    this.itemList = this.navParams.get('purchasedItems');
    console.log('INVOICE ITEMS', this.itemList);
  }

}
