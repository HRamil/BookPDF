import { Component, OnInit } from '@angular/core';
import data from './../../assets/data/book.json';

interface Book{
  name: String,
  image : String,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  books : Book[] = data;
}
