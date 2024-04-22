import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'dmx-slide-twelve',
    standalone: true,
    templateUrl: './slide-twelve.component.html'
})
export class SlideTwelveComponent {}
