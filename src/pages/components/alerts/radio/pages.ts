import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'template.html'
})
export class Alert {
    testRadioOpen: boolean;
    testRadioResult;

    constructor(public alertCtrl: AlertController) { }

    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Lightsaber color',
            inputs: [
                {
                    type: 'radio',
                    label: 'Blue',
                    value: 'blue',
                    checked: true
                },
                {
                    type: 'radio',
                    label: 'Green',
                    value: 'green'
                },
                {
                    type: 'radio',
                    label: 'Red',
                    value: 'red'
                },
                {
                    type: 'radio',
                    label: 'Yellow',
                    value: 'yellow'
                },
                {
                    type: 'radio',
                    label: 'Purple',
                    value: 'purple'
                },
                {
                    type: 'radio',
                    label: 'White',
                    value: 'white'
                },
                {
                    type: 'radio',
                    label: 'White',
                    value: 'white'
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
                    text: 'Okay',
                    handler: data => {
                        console.log('Radio data:', data);
                        this.testRadioOpen = false;
                        this.testRadioResult = data;
                    }
                }
            ]
        });

        alert.present().then(() => {
            this.testRadioOpen = true;
        });
    }
}