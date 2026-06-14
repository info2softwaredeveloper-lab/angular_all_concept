import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() signUp = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  signUpBtn(){
    this.signUp.emit(true)
  }
}
