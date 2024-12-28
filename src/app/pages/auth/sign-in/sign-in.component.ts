import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  
	loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
	})

  constructor(
    private _router : Router,
    private _dialogRef : DialogRef
  ){

  }

  login(){

    console.log("!11111111",this.loginFormGroup.value)
  }

  signup(){
    this._router.navigate(['sign-up']);
    this._dialogRef.close();
  }

}
