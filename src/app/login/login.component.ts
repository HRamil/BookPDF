import { Component, OnInit } from '@angular/core';
import { faUser ,faLock  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  text = "in"
  faUser = faUser
  faLock = faLock
  blur(){
    document.getElementById("body").style.opacity = "0.5";
  }
}
