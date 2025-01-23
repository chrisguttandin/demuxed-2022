import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'dmx-slide-twenty',
    templateUrl: './slide-twenty.component.html'
})
export class SlideTwentyComponent {}
