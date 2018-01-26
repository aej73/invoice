import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { InvoicePage } from '../invoice/invoice';
import { DocumentsPage } from '../documents/documents';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InvoicePage;
  tab3Root = DocumentsPage;

  constructor() {

  }
}
