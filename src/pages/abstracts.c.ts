import { NavController, NavParams } from 'ionic-angular';

import { ListPage } from './interfaces.c';

let icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

/**
 * ListAbstract
 */
export abstract class ListPageAbstract implements ListPage {
    selectedItem: any;
    icons: string[];
    items: Array<{ title: string, icon: string, component: Object }>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.selectedItem = this.navParams.get('item');
        this.icons = icons;
    }

    itemTapped(event, item) {
        this.navCtrl.push(item.component);
    }
}