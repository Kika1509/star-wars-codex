import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Films} from "./models/films";

@Injectable()
export class FilmsService {
  private filmsUrl = '/films';
  private baseUrl = 'https://swapi.dev/api';

  constructor(
    private httpClient: HttpClient) {
  }

  getFilmsInformation(): Films[]{
    let film = new Array<Films>();
    this.getFilmsList()
      .subscribe((res)=>{
        res.results.forEach((fil) => film.push(fil));
      })
    return film;
  }

  getFilmsList(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + this.filmsUrl);
  }


}
