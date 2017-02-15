import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'template.html'
})
export class Alert {
    testCheckboxOpen: boolean;
    testCheckboxResult;

    constructor(public alertCtrl: AlertController) { }

    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Lightsaber color',
            inputs: [
                {
                    type: 'checkbox',
                    label: 'Blue',
                    value: 'blue',
                    checked: true
                },
                {
                    type: 'checkbox',
                    label: 'Green',
                    value: 'green'
                },
                {
                    type: 'checkbox',
                    label: 'Red',
                    value: 'red'
                },
                {
                    type: 'checkbox',
                    label: 'Yellow',
                    value: 'yellow'
                },
                {
                    type: 'checkbox',
                    label: 'Purple',
                    value: 'purple'
                },
                {
                    type: 'checkbox',
                    label: 'White',
                    value: 'white'
                },
                {
                    type: 'checkbox',
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
                        console.log('Checkbox data:', data);
                        this.testCheckboxOpen = false;
                        this.testCheckboxResult = data;
                    }
                }
            ]
        });

        alert.present().then(() => {
            this.testCheckboxOpen = true;
        });
    }
}