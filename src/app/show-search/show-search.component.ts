import { Component } from '@angular/core';
import { IShowSearch } from '../ishowsearch';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrl: './show-search.component.css'
})
export class ShowSearchComponent {
  current: IShowSearch = {
    name: 'Friends',
    summary: 'Show about friends',
    network: 'NBC',
    image: ' ',
    rating: 8.9,
    genre: 'Comedy',
    date: '1994-09-22',
  }
}
