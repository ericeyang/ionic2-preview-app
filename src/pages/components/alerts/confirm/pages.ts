import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'template.html'
})
export class Alert {
    constructor(public alertCtrl: AlertController) { }

    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Confirm purchase',
            subTitle: 'Do you want to buy this book?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked!');
                    }
                },
                {
                    text: 'Buy',
                    handler: () => {
                        console.log('Buy clicked!');
                    }
                }
            ]
        });

        alert.present();
    }
}