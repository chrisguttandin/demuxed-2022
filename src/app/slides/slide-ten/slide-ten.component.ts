import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefsComponent } from '../defs/defs.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DefsComponent],
    selector: 'dmx-slide-ten',
    styleUrls: ['./slide-ten.component.scss'],
    templateUrl: './slide-ten.component.html'
})
export class SlideTenComponent {}
