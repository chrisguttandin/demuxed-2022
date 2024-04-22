import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'dmx-slide-eleven',
    standalone: true,
    templateUrl: './slide-eleven.component.html'
})
export class SlideElevenComponent {}
