import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { ShowSearchComponent } from '../show-search/show-search.component';

@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrl: './search-tool.component.css'
})
export class SearchToolComponent {
  //output any valid event in the search bar to the parent app component
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(3)])

constructor(){
  this.search.valueChanges
  .pipe(debounceTime(1000))
  .subscribe(searchValue => {
      if (this.search.valid){
        if (this.search.value !== ''){
          this.searchEvent.emit(searchValue??undefined)
        }
      }
    })
  }
}


