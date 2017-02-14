import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'template.html'
})
export class Alert {
    constructor(public alertCtrl: AlertController) { }

    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Username'
                },
                {
                    name: 'password',
                    placeholder: 'Password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked!');
                    }
                },
                {
                    text: 'Login',
                    handler: () => {
                        console.log('Login clicked!');
                    }
                }
            ]
        });

        alert.present();
    }
}