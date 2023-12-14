import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

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
        
        //TODO else set current [from showSearch component ] to blank. Setting it to blank allows the "data unavailable" text to display correctly. There might be other places to fix this issue, but here is one place. 
      }
    })
  }
}


