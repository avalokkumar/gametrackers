import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Game} from "./game.model";


@Injectable()
export class GamesService {
  selGame: Game;

  constructor(private http: Http) {
    console.log('GamesService Initiated')
  }

  getMessage(){
    return this.http.get('http://localhost:3000/api')
      .map((response: Response) => response.text())
      .do((data) => {
        console.log('Data : '+ data);
      })
      .catch(this.handleErrors);
  }

  getAllGames(){
    return this.http.get('http://localhost:3000/api/games')
      .map((response: Response) => JSON.parse(response.text()).data)
      .do((data) => {
        console.log('Data incoming')
        console.log(data)
      })
      .catch(this.handleErrors);
  }

  getSelectedGame(id){
    return this.http.get('http://localhost:3000/api/games/'+id)
      .map((response: Response) => response.json())
      .do((data) => {
        console.log('Selected Games');
        console.log(data);
      })
      .catch(this.handleErrors);
  }

  handleErrors(error:Response){
    console.log("Error Occured :: "+error);
    return Observable.throw(error.json().error || 'Server Error Occurred');
  }

}
