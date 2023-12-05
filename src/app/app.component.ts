import { Component } from '@angular/core';
import { CallTvmazeApiService } from './call-tvmaze-api.service';
import { IShowSearch } from './ishowsearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team2-assignment-1';
  currentShow: IShowSearch = {
    name: '',
    summary: '',
    image: '',
    rating: 0,
    genre: '',
    date: '',
  }

  constructor(private callTvmazeApiService: CallTvmazeApiService){
    }
//constructor will call the service right away
//solution: call the service within the doSearch function which is only triggered by a search event
doSearch(searchValue:string){
    this.callTvmazeApiService.getSearchedShow(searchValue).subscribe((data:IShowSearch) => this.currentShow = data)
}
}
