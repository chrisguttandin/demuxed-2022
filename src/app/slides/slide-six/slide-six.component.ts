import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefsComponent } from '../defs/defs.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DefsComponent],
    selector: 'dmx-slide-six',
    standalone: true,
    styleUrls: ['./slide-six.component.scss'],
    templateUrl: './slide-six.component.html'
})
export class SlideSixComponent {}
