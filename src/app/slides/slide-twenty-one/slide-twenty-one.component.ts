import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'dmx-slide-twenty-one',
    standalone: true,
    templateUrl: './slide-twenty-one.component.html'
})
export class SlideTwentyOneComponent {}
