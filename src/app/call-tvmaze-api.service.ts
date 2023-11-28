// This file mimics the weather-service.ts file instructions from our lesson in Class 4. 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISearchedShowData } from './isearched-show-data';
import { IShowSearch } from './ishowsearch';

@Injectable({
  providedIn: 'root'
})
export class CallTvmazeApiService {

  constructor(private httpClient: HttpClient) { }

  getSearchedShow(name:string){
    this.httpClient.get<ISearchedShowData>(`https://api.tvmaze.com/singlesearch/shows?q=${name}}`)
  }

  private transformToIShowSearch(data:ISearchedShowData): IShowSearch {
    return {
      name: data.name,
      summary: data.summary,
      network: data.network.name,
      image: data.image.medium,
      rating: data.rating.average,
      genre: data.genres[0],
      date: data.premiered
      
    } 

}
}
