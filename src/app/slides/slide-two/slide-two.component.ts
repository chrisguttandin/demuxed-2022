import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'dmx-slide-two',
    templateUrl: './slide-two.component.html'
})
export class SlideTwoComponent {}
