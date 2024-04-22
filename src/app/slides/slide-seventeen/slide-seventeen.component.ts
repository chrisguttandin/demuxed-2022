import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'dmx-slide-seventeen',
    standalone: true,
    styleUrls: ['./slide-seventeen.component.scss'],
    templateUrl: './slide-seventeen.component.html'
})
export class SlideSeventeenComponent {}
