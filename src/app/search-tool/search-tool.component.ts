import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrl: './search-tool.component.css'
})
export class SearchToolComponent {
  search = new FormControl('', [Validators.minLength(3)])

constructor(){
  this.search.valueChanges
  .pipe(debounceTime(1000))
  .subscribe(searchValue => {
    if (this.search.valid)
    console.log(searchValue)
  }
  )}
  }


