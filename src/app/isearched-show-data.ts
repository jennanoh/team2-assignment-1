// This file mimics the icurrent-weather-data.ts file created  during our lesson in Class 4. This function is an interface that reviews data from TVMaze API and allows us to pick and choose what we want from it.

export interface ISearchedShowData {
  name:string,
  summary:string,
  network:{
    name:string
  },
  image:{
    medium:string
  },
  rating:{
    average:number
  },
  genres:[
    string
  ],
  premiered:string

}
