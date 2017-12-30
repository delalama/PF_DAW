import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {GiphyService} from './gyphy-service.service';
import { HomeComponent } from './home/home.component';
import {MisGifs} from './home/models/misGifs';
import { RenderedGifComponent } from './home/rendered-gif/rendered-gif.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RenderedGifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GiphyService, MisGifs],
  bootstrap: [AppComponent]
})
export class AppModule { }
