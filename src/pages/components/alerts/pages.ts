import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Alert as BasicAlert } from '../alerts/basic/pages';
import { Alert as ConfirmAlert } from '../alerts/confirm/pages';
import { Alert as PromptAlert } from '../alerts/prompt/pages';

@Component({
  templateUrl: 'template.html'
})
export class Alert {
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
        component: BasicAlert
      },
      {
        title: "Confirm",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        component: ConfirmAlert
      },
      {
        title: "Prompt",
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        component: PromptAlert
      }
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.component);
  }
}
