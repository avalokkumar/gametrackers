import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Game} from "./game.model";


@Injectable()
export class GamesService {

  constructor(private http: Http) {
    console.log('GamesService Initiated')
  }

  getAllGames(){
    return this.http.get('src/data/games-data.json')
      .map((response: Response) => <Game[]>response.json().data)
      .do((data) => {
        console.log('Data incoming')
        console.log(data)
      })
      .catch(this.handleErrors);
  }

  handleErrors(error:Response){
    console.log("Error Occured "+error);
    return Observable.throw(error.json().error || 'Server Error Occurred');
  }

}
