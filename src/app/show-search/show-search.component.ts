import { Component } from '@angular/core';
import { IShowSearch } from '../ishowsearch';
import { CallTvmazeApiService } from '../call-tvmaze-api.service'

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrl: './show-search.component.css'
})
export class ShowSearchComponent {
  current: IShowSearch = {
    name: '',
    summary: '',
    network: '',
    image: '',
    rating: ,
    genre: '',
    date: '',
  }
  constructor(private callTvmazeApiService: CallTvmazeApiService){
    this.callTvmazeApiService.getSearchedShow('Girls').subscribe(data => this.current = data)}
  
}


