import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages = {
    email: [
    {type: "required", message: "El email es obligatorio"},
    {type: "pattern", message: "Email invalido"}
  ],
    password: [
      {type: "required", message: "La contraseña es obligatoria"}
    ],
    name: [
      { type: 'required', message: 'El nombre es obligatorio.' },
    ],
    last_name: [
      { type: 'required', message: 'El apellido es obligatorio.' },
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthenticateService
  ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "", Validators.compose ([ Validators.required, Validators.email ])
      ),
      password: new FormControl(
        "", Validators.compose ([ Validators.required ])
      ),
      name: new FormControl(
        "", Validators.compose ([ Validators.required ])
      ),
      last_name: new FormControl(
        "", Validators.compose ([ Validators.required ])
      )
    });
  }

  ngOnInit() {        
  }
  registerUser(dataLogin: any) {
    console.log(dataLogin)
    this.authService.loginUser(dataLogin).then(res => {
      this.navCtrl.navigateForward("/home")
    })
  }
  goToLogin() {
    this.navCtrl.navigateBack("/login");
  }
  register(registerData:any){
    console.log(registerData)
    this.authService.registerUser(registerData).then(res => {
      this.navCtrl.navigateBack("/login");
    })
  }
}