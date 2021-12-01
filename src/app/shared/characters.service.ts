import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Character} from "./models/character";
import {HomeWorld} from "./models/homeWorld";

@Injectable()
export class CharactersService {
  private charactersUrl = '/people';
  private baseUrl = 'https://swapi.dev/api';

  constructor(
    private httpClient: HttpClient) {
  }

  getCharactersInformation(): Character[]{
    let char = new Array<Character>();
    this.getCharactersList()
      .subscribe((res)=>{
        res.results.forEach((charac) => char.push(charac));
      })
    return char;
  }

  getCharactersList(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + this.charactersUrl);
  }

  async getCharactersById(id: string): Promise<any>{
    return this.httpClient.get<any>(this.baseUrl + this.charactersUrl + '/' + id).toPromise();
  }

  async getHomeworldByUrl(url: string): Promise<HomeWorld>{
    return this.httpClient.get<any>(url).toPromise();
  }

  async getFilmByUrl(url: string): Promise<any>{
    return this.httpClient.get<any>(url).toPromise();
  }


}
