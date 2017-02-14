import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ActionSheet } from './action-sheets/pages';
import { Alert } from './alerts/pages';

@Component({
  templateUrl: 'template.html'
})
export class ComponentsPage {
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
        title: "Action Sheets",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        component: ActionSheet
      },
      {
        title: "Alerts",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        component: Alert
      }
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
