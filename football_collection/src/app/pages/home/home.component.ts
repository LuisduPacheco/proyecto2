import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalService } from 'src/app/shared/services/principal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private principalservice: PrincipalService, private router: Router) {}

  filterTeam = '';
  equipo_temporal:any;

  ngOnInit(): void {
    this.equipo_temporal = {};
    this.obtenerInformacion();
  }
  public obtenerInformacion() 
  {
    this.principalservice.getTeamsLigue().subscribe(
      (res: any) => {
        this.equipo_temporal = JSON.parse(JSON.stringify(res));
      },(error) => 
      {
        Swal.fire("Ah ocurrido un error",error.error, 'error')
      }
    );
  }

  public cerrar () {

    let info = this.principalservice.cerrar_sesion() 
    localStorage.setItem("user", JSON.stringify(info))
    this.router.navigate(["login"])
  }
}
