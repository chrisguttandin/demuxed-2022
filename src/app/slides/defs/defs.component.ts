import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'dmx-defs',
    styleUrls: ['./defs.component.css'],
    templateUrl: './defs.component.html'
})
export class DefsComponent {}
