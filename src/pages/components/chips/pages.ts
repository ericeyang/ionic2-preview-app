import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListPageAbstract } from '../../../helpers/list-page-abstract';

import { Chip as TextChip } from './text/pages';

@Component({
    templateUrl: 'template.html'
})
export class Chip extends ListPageAbstract {
    constructor(public navCtrl: NavController, public navParams: NavParams){
        super(navCtrl, navParams);

        this.items = [
            {
                title: "Text Clips",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: TextChip
            }
        ];
    }
}