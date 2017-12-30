import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {
  private API_CALL = 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=';
  private API_KEY = 'WRITE YOUR OWN API KEY';
  private API_LIMIT = '&limit=15';

  private API_CALL2 = 'http://api.giphy.com/v1/gifs/search?q=';
  API_VALUE: string;
  private API_KEY2 = '&api_key=WnjCPisi02fooEvB25iMLbOQ26fIVbsz';
  private API_LIMIT2 = '&limit=15'; private enteredValue: string;
  constructor (
    private http: Http) {
  }

  getUser(enteredValue: string) {
    // this.API_CALL + this.API_KEY + this.API_LIMIT
    // parámetros que funcionaban
    this.API_VALUE = enteredValue;
    return this.http.get(this.API_CALL2 + this.API_VALUE + this.API_KEY2 + this.API_LIMIT2)
      .map(( res: Response ) => res.json());

  }

}
