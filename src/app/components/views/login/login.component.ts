import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: {
    login: boolean,
    loginMessage: string
  } = {
    login: false,
    loginMessage: 'Error'
  }
  formLogin: FormGroup;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _ngxSpinnerService: NgxSpinnerService,
  ) {
    this.initForm();
    this.showSpinner();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.formLogin = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  submitformLogin(event: Event): void {
    event.preventDefault();
    if (this.formLogin.valid) this.doLogin();
    else this.formLogin.markAllAsTouched();
  }

  doLogin(): void {
    let isLoginOk = true;
    if (isLoginOk) {
      console.log('logged!!!');
      this.goToAnotherPath('/home');
    } else {
      console.log('NO logged!!!');
      this.error = {
        login: true,
        loginMessage: 'Datos invalidos!'
      }
      this.error = {
        login: true,
        loginMessage: 'Contacta a un administrador!'
      }
    }
  }

  /** Navigations Functions */
  goToAnotherPath(path: String): void {
    this._router.navigate([path]);
  }

  /** Validations Forms Functions */
  getIsValid(form, propertyFormName: string): boolean {
    let isValid: boolean = false;
    if (form.get(propertyFormName).touched && form.get(propertyFormName).valid) isValid = true;
    return isValid;
  }

  getIsInvalid(form, propertyFormName: string): boolean {
    let isInvalid: boolean = false;
    if (form.get(propertyFormName).touched && form.get(propertyFormName).invalid) isInvalid = true;
    return isInvalid;
  }

  getPropertyHasErrors(form, propertyFormName: string): boolean {
    let hasError: boolean = false;
    if ( form.get(propertyFormName).errors && form.get(propertyFormName).touched ) hasError = true;
    return hasError;
  }

  getPropertyErrors(form, propertyFormName: string, errorName: string): boolean {
    let hasError: boolean = false;
    if ( form.get(propertyFormName).hasError(errorName) ) hasError = true;
    return hasError;
  }

  /***************************** Spinner Functions *****************************/
  showSpinner(): void {
    this._ngxSpinnerService.show();
  }

  hideSpinner(): void {
    this._ngxSpinnerService.hide();
  }
}
