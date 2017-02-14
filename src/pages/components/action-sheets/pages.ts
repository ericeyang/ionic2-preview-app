import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ActionSheet as BasicActionSheet } from '../action-sheets/basic/pages';
import { ActionSheet as AsyncActionSheet } from '../action-sheets/async/pages';

@Component({
  templateUrl: 'template.html'
})
export class ActionSheet {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, icon: string, component: Object }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
      {
        title: "Basic",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        component: BasicActionSheet
      },
      {
        title: "Async",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        component: AsyncActionSheet
      }
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
