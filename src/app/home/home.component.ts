import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../gyphy-service.service';
import {log} from 'util';
import {MisGifs} from './models/misGifs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos: JSON;

  datosRedux: JSON;

  misGifs: MisGifs;
  //TODO HAY QUE APRENDER A DECLARAR UN ARRAY DE ESTE TIPO

  private giphiService: GiphyService;

  ngOnInit(): void {
  }

  constructor(giphiService: GiphyService, misGifs: MisGifs) {
    this.giphiService = giphiService;
    this.misGifs = misGifs;
  }

  process(tagValue: HTMLInputElement){
    const enteredValue: string = tagValue.value;
    console.log(tagValue.value);
    this.giphiService.getUser(enteredValue).subscribe( data => this.postProcess(data));
  }

  postProcess(data) {
    console.log(data);
    console.log('atribuimos a nuestra variable local');
    this.datos = data.data;
    //Solo deseamos el "data" del JSON, no se contempla el error en la respuesta
    // this.datosRedux = this.datos.data[0];
    console.log(this.datos);
    this.misGifs.name = this.datos[0].title;
    this.misGifs.url = this.datos[0].images.fixed_width.mp4;
    // this.datosRedux[0] = this.datos[0].images.fixed_width.mp4;
    // this.datosRedux[1] = this.datos[1].images.fixed_width.mp4;
    // console.log(this.datosRedux);
    console.log(this.misGifs);

    // const myObj = JSON.stringify(data);
    // console.log(myObj);
    console.log('allright, ahora parse & render');
    // this.misGifs  = JSON.parse('{ "myString": "string", "myNumber": 4 }');


  }
  // TODO for para resp e imprimir cada video

  //
  // process(tagValue: HTMLInputElement){
  //   console.log(tagValue.value + 'a cont');
  //   this.giphiService.getUser().subscribe(data => console.log(data));
  // }

}
