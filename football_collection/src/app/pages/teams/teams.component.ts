import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrincipalService } from 'src/app/shared/services/principal.service';
import { TeamsService } from 'src/app/shared/services/teams.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  id: any;
  info_team: any;
  info_player: any;
  constructor(
    private route: ActivatedRoute,
    private teamservice: TeamsService,
    private principalservice:PrincipalService

  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    
  }

  filterPlayer = '';
  jugador_temporal:any;

  ngOnInit(): void {
    this.jugador_temporal = [];
    this.info_player = [];
    this.info_team = {};
    this.getInfoPlayers();
    this.getInfoTeam();
  }

  public getInfoTeam() {
    this.teamservice.getInfoTeam(this.id).subscribe(
      (res: any) => {
        this.info_team = res;
        console.log(res);
      },
      (error) => {
        Swal.fire('Ah ocurrido un error', error.error, 'error');
      }
    );
  }
  public getInfoPlayers() {
    this.teamservice.getInfoTeamPlayers(this.id).subscribe(
      (res: any) => {
        // this.info_player = res['repuesta']['informacion']['players'];
         this.jugador_temporal = JSON.parse(JSON.stringify(res)).respuesta.informacion[0].players;
        console.log(res.respuesta.informacion);
      },
      (error) => {
        Swal.fire('Ah ocurrido un error', error.error, 'error');
      }
    );
  }
}

