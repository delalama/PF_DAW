import { Component } from '@angular/core';
import {GiphyService} from './gyphy-service.service';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Aquí va la página de login!, que lleva a este compomente';

}
