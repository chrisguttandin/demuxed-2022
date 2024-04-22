import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'dmx-slide-three',
    standalone: true,
    styleUrls: ['./slide-three.component.scss'],
    templateUrl: './slide-three.component.html'
})
export class SlideThreeComponent {}
