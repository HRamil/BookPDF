import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/book.json';
interface Book{
  name: string,
  image : string,
  view : number
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log()
  }
  book: Book[] = data
}
