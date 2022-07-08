import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsercrudService } from 'src/app/services/usercrud.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.sass'],
})
export class CreateuserComponent implements OnInit {
  public createUserForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usercrudService: UsercrudService
  ) {
    this.createUserForm = this.formBuilder.group({
      nameUser: '',
      lastNameUser: '',
      ageUser: '',
    });
  }

  ngOnInit(): void {}

  createUser() {
    console.log(this.createUserForm.value);
    this.usercrudService.createUser(this.createUserForm.value);
  }

  //faltan validadores
  //falta crear servicio
  //fatta conectar con firebase
}
