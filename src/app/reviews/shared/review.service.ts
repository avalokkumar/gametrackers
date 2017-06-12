import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Reviews} from "./reviews.model";

@Injectable()
export class ReviewService {

  constructor(private http: Http) { }

  getAllReviews(){
    return this.http.get('http://localhost:3000/api/review')
      .map((response: Response) => JSON.parse(response.text()).data)
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
