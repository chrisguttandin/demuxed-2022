import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefsComponent } from '../defs/defs.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DefsComponent],
    selector: 'dmx-slide-seven',
    standalone: true,
    styleUrls: ['./slide-seven.component.scss'],
    templateUrl: './slide-seven.component.html'
})
export class SlideSevenComponent {}
