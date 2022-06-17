import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.sass'],
})
export class CreateuserComponent implements OnInit {
  public createUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createUserForm = this.formBuilder.group({
      nameUser: '',
      lastNameUser: '',
      ageUser: '',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.createUserForm.value);
  }

  //faltan validadores
  //falta crear servicio
  //fatta conectar con firebase

}
