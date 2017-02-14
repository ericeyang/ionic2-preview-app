import { Component } from '@angular/core';

import { ActionSheetController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: 'template.html'
})
export class ActionSheet {
    constructor(
        public actionSheetCtrl: ActionSheetController,
        public navCtrl: NavController,
        public storage: Storage
    ) { }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: "Modify your album",
            buttons: [
                {
                    text: "Destructive",
                    role: "destructive",
                    handler: () => {
                        console.log("Destructive clicked!");
                    }
                },
                {
                    text: 'Archive',
                    handler: () => {
                        console.log('Archive clicked');

                        let navTransition = actionSheet.dismiss();

                        // set a key/value
                        this.storage.set('name', 'Max');

                        this.storage.get('name').then((val) => {
                            navTransition.then(() => {
                                this.navCtrl.pop();
                            });
                        });

                        return false;
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        actionSheet.present();
    }
}