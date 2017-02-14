import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'template.html'
})
export class Alert {
    constructor(public alertCtrl: AlertController) { }

    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Low battery',
            subTitle: '10% of battery remaining',
            buttons: ['Dismiss']
        });

        alert.present();
    }
}