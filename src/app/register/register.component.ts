import { Component, OnInit } from '@angular/core';
import { faWindowClose , faUser ,faLock ,faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  text = "up"
  faWindowClose = faWindowClose
  faUser = faUser
  faLock = faLock
  faEnvelope =faEnvelope

  dissableBlur(){
    document.getElementById("body").style.opacity = "1"
  }
}
