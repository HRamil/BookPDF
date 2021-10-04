import { Component, OnInit } from '@angular/core';
import { faWindowClose  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faWindowClose = faWindowClose

  dissableBlur(){
    document.getElementById("body").style.opacity = "1"
  }
}
