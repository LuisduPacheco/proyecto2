import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent implements OnInit {

  @Input() id_equipo: any;
  @Input() equipo:any;
  @Input() escudo:any;  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goTeam(){
    this.route.navigate(['team', {id: this.id_equipo}]);
  }

}
