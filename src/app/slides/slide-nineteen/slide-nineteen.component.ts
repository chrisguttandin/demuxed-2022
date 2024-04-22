import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'dmx-slide-nineteen',
    standalone: true,
    styleUrls: ['./slide-nineteen.component.scss'],
    templateUrl: './slide-nineteen.component.html'
})
export class SlideNineteenComponent {}
