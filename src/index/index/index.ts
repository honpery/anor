/**
 * atom component.
 */
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'anor',
    templateUrl: './index.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.anor]': 'true'
    }
})

export class Anor implements OnInit {
    constructor() { }

    ngOnInit() { }
}