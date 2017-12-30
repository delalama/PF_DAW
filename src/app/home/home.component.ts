import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../gyphy-service.service';
import {MyGif} from './models/misGifs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos: JSON;
  // TODO HAY QUE APRENDER A DECLARAR UN ARRAY DE ESTE TIPO

  giphies = new Array();

  misGifs: MyGif;

  private giphiService: GiphyService;

  ngOnInit(): void {
  }

  constructor(giphiService: GiphyService, misGifs: MyGif) {
    this.giphiService = giphiService;
    this.misGifs = misGifs;
  }

  process(tagValue: HTMLInputElement){
    const enteredValue: string = tagValue.value;
    this.giphiService.getUser(enteredValue).subscribe(data => this.postProcess(data) );
  }

  postProcess(data) {
    // initialize array to avoiding unnecesary oversize
    this.giphies = new Array();
    //
    console.log('data will');
    console.log(data);

    this.datos = data.data;
    // console.log(this.datos);
    // console.log('empieza el bucle');

    data.data.forEach((item, index) => {

      const ind = index;
      const name = item.title;
      const url = item.images.original.url;
      console.log('fin elemento');

      const newgif = new MyGif;
      newgif.name = item.title;
      newgif.url = item.images.original.url;

      this.giphies.push(newgif);

    });

    console.log('acaba el bucle e imprimimos giphies');

    console.log(this.giphies);

    //
    // this.giphies[0].name = this.datos[0].title ;
    // this.misGifs.name = this.datos[0].title ;
    // this.misGifs.url = this.datos[0].images.original.url;

    this.misGifs = this.giphies[0];
    console.log(this.misGifs.url);
  }
  // console.log(this.misGifs.name);


  // this.giphies[0].url = this.datos[0].images.original.url ;
  // TODO for para resp e imprimir cada video

  //
  // process(tagValue: HTMLInputElement){
  //   console.log(tagValue.value + 'a cont');
  //   this.giphiService.getUser().subscribe(data => console.log(data));
  // }

}
