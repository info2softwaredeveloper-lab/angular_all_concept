import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

@Output() login = new EventEmitter<boolean>();
form!: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      pwd: new FormControl(''),
      c_pwd: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  loginButton(){
    this.login.emit(true)
  }

  signUp(){
    console.log(this.form.value)
  }
}
