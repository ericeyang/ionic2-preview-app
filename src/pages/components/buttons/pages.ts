import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListPageAbstract } from '../../../helpers/list-page-abstract';
import { Button as BasicButton } from './basic/pages';
import { Button as OutlineButton } from './outline/pages';
import { Button as ClearButton } from './clear/pages';
import { Button as RoundButton } from './round/pages';
import { Button as BlockButton } from './block/pages';
import { Button as FullButton } from './full/pages';
import { Button as ButtonSizes } from './sizes/pages';
import { Button as IconButton } from './icons/pages';
import { Button as ButtonsInComponents } from './components/pages';

@Component({
    templateUrl: 'template.html'
})
export class Button extends ListPageAbstract {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        super(navCtrl, navParams);

        this.items = [
            {
                title: "Basic buttons",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: BasicButton
            },
            {
                title: "Outline buttons",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: OutlineButton
            },
            {
                title: "Clear buttons",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: ClearButton
            },
            {
                title: "Round buttons",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: RoundButton
            },
            {
                title: "Block buttons",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: BlockButton
            },
            {
                title: "Full buttons",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: FullButton
            },
            {
                title: "Button sizes",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: ButtonSizes
            },
            {
                title: "Icon buttons",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: IconButton
            },
            {
                title: "Buttons in components",
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
                component: ButtonsInComponents
            }
        ];
    }
} 