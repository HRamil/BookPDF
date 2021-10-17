import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/book.json';

interface Slide{
  image : string,
  class : string
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { 
  }
  slide = []
  ngOnInit(): void {

    let arr = []
    for(let i=0; i<data.length;i++){
      arr.push(data[i])
    }
    for(let i=1;i<=5;i++){
      let max = 0 , index ;
      for(let j=0; j<arr.length;j++){
        if(arr[j].view>=max){
          max=arr[j].view;
          index = j
        }
      }
      let obj = { image: arr[index].image,
                  class: "img"+i}

      arr.splice(index,1)
      this.slide.push(obj)
    }

  }
  
  slider: Slide[] = this.slide
}
