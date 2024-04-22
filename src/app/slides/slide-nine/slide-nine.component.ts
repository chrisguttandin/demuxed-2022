import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefsComponent } from '../defs/defs.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DefsComponent],
    selector: 'dmx-slide-nine',
    standalone: true,
    styleUrls: ['./slide-nine.component.scss'],
    templateUrl: './slide-nine.component.html'
})
export class SlideNineComponent {}
