import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'dmx-slide-sixteen',
    standalone: true,
    templateUrl: './slide-sixteen.component.html'
})
export class SlideSixteenComponent {}
