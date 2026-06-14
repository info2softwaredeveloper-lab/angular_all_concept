import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  form!: FormGroup
  signUp: boolean = true;
  login!:boolean
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({

    })
  }

  loginEvent(event: boolean): void {
    if (event) {
      this.signUp = false;
      this.login = true;
    }
  }

  signUpEvent(event: boolean): void {
    if (event) {
      this.login = false;
      this.signUp = true;
    }
  }

}
