import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PrincipalService } from 'src/app/shared/services/principal.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public FormData = this.formbuilder.group(
    {
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }
  )

  constructor( private principalservice: PrincipalService, private router:Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  login(){
    let logi = this.principalservice.inicio_sesion(String(this.FormData.value.username), String(this.FormData.value.password))
    if(logi.autenticado) 
    {
      console.log(logi)
      localStorage.setItem('user', JSON.stringify(logi))
      this.router.navigate(['home'])
      Swal.fire('Autenticación Correcta', `Bienvenido, ${logi.usuario}`, 'info')
      
    }
    else{
      Swal.fire('Autenticación Incorrecta', `Usuario y/o contraseña incorrectos`, 'error')
    }
  }

  get username() { return this.FormData.get('username')}
  get password() { return this.FormData.get('password')}

}
