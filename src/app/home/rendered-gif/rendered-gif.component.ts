import {Component, Input, OnInit} from '@angular/core';
import {MisGifs} from '../models/misGifs';

@Component({
  selector: 'app-rendered-gif',
  templateUrl: './rendered-gif.component.html',
  styleUrls: ['./rendered-gif.component.css']
})
export class RenderedGifComponent implements OnInit {
  @Input() misGifs: MisGifs;

  constructor(misGifs: MisGifs) {
    this.misGifs = misGifs;
  }

  ngOnInit() {
  }

}
