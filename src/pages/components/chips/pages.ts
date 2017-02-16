import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListPageAbstract } from '../../../helpers/list-page-abstract';

import { Chip as TextChip } from './text/pages';
import { Chip as ColorChip } from './color/pages';
import { Chip as IconChip } from './icon/pages';
import { Chip as AvatarChip } from './avatar/pages';
import { Chip as DeleteChip } from './delete/pages';

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
            },
            {
                title: "Color Clips",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: ColorChip
            },
            {
                title: "Icon Clips",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: IconChip
            },
            {
                title: "Avatar Clips",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: AvatarChip
            },
            {
                title: "Delete Clips",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: DeleteChip
            }
        ];
    }
}