import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sales';

  usuario = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService){}

  login(){
    console.log(this.usuario);
    const {email, password} = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log(res);
    });
  }
}
