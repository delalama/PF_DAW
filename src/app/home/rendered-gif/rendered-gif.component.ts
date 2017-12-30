import {Component, Input, OnInit} from '@angular/core';
import {MyGif} from '../models/misGifs';

@Component({
  selector: 'app-rendered-gif',
  templateUrl: './rendered-gif.component.html',
  styleUrls: ['./rendered-gif.component.css']
})
export class RenderedGifComponent implements OnInit {
  @Input() misGifs: MyGif;

  constructor(misGifs: MyGif) {
    this.misGifs = misGifs;
  }

  ngOnInit() {
  }

}
