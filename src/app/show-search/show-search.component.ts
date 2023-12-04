import { Component, Input } from '@angular/core';
import { IShowSearch } from '../ishowsearch';


@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrl: './show-search.component.css'
})
export class ShowSearchComponent {
  //app component will input data to current variable
  @Input() current: IShowSearch = {
    name: '',
    summary: '',
    network: '',
    image: '',
    rating: 0,
    genre: '',
    date: '',
  }
}