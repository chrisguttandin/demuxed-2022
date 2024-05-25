import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet],
    selector: 'dmx-app',
    standalone: true,
    templateUrl: './app.component.html'
})
export class AppComponent {}
