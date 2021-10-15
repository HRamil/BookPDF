import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/book.json';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.list()
  }
  slide = []
  
  list(){
    let arr = data;
    for(let i=0;i<5;i++){
      let max = 0;
      let index = 0;
      for(let j=0;j<data.length;j++){
        if(data[j].view>max){
          max=data[j].view
          index = j
        }
      }
      this.slide.push(arr[index].image)
      arr.splice(index, 1);
    }
  }
}
