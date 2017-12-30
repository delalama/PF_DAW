import {Component, Input, OnInit} from '@angular/core';
import {MyGif} from '../models/misGifs';

@Component({
  selector: 'app-rendered-gif',
  templateUrl: './rendered-gif.component.html',
  styleUrls: ['./rendered-gif.component.css']
})
export class RenderedGifComponent implements OnInit {
  @Input() myGif: MyGif;

  constructor(misGifs: MyGif) {
    this.myGif = misGifs;
  }

  ngOnInit() {
  }

}
