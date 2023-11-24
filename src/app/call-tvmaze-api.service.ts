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

}
}
