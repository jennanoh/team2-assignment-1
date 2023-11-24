// This file mimics the weather-service.ts file instructions from our lesson in Class 4. 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
