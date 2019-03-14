import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
   Username="";
   Password="";
  constructor(private router:Router, private alertController:AlertController) { }

  ngOnInit() {}

  
  

  login(){
    if(this.Username==this.Password){
      this.router.navigate(['./dashboard']);
    }else{
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Login failed!',
      message: 'Incorrect Username and Password',
      buttons: ['OK']
    });

    await alert.present();
  }
}
