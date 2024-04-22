import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'dmx-slide-fourteen',
    standalone: true,
    styleUrls: ['./slide-fourteen.component.scss'],
    templateUrl: './slide-fourteen.component.html'
})
export class SlideFourteenComponent {}
