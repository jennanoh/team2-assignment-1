// This file mimics the weather-service.ts file instructions from our lesson in Class 4. 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { ISearchedShowData } from './isearched-show-data';
import { IShowSearch } from './ishowsearch';

@Injectable({
  providedIn: 'root'
})
export class CallTvmazeApiService {

  constructor(private httpClient: HttpClient) { }

  getSearchedShow(name:string){

    return this.httpClient.get<ISearchedShowData>(`https://api.tvmaze.com/singlesearch/shows?q=${name}}`).pipe(map(data => this.transformToIShowSearch(data))
    )
  }

  private transformToIShowSearch(data:ISearchedShowData): IShowSearch {
    return {
      name: data.name,
      summary: data.summary,
      image: data.image.medium,
      rating: data.rating.average,
      genre: data.genres[0],
      date: data.premiered
      
    } 

}
}
