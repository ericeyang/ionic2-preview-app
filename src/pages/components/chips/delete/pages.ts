import { Component } from '@angular/core';

@Component({
    templateUrl: 'template.html'
})
export class Chip { 
    constructor(){}

    delete(chip: Element){
        chip.remove();
    }
}