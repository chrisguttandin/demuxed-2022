import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefsComponent } from '../defs/defs.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DefsComponent],
    selector: 'dmx-slide-eight',
    standalone: true,
    styleUrls: ['./slide-eight.component.scss'],
    templateUrl: './slide-eight.component.html'
})
export class SlideEightComponent {}
