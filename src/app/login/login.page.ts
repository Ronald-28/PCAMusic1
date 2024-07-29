import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      {type: "required", message: "El email es obligatorio"},
      {type: "pattern", message: "Email invalido"}
    ],
    password: [
      {type: "required", message: "La contraseña es obligatoria"}
    ]
  }
  constructor( private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController, private router: Router) { 
    this.loginForm = this.formBuilder.group ({
      email: new FormControl(
        "", Validators.compose([ Validators.required, Validators.email,])
      ), 
      password: [
        '', [Validators.required]]
    })
  }

  ngOnInit() {
  }
  loginUser(dataLogin: any) {
    console.log(dataLogin)
    this.authService.loginUser(dataLogin).then(res => {
      this.navCtrl.navigateForward("/menu/home")
    })
  }
  goToLogin() {
    this.navCtrl.navigateBack("/register");
  }
}
