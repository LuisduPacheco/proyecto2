import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {

  @Input() id_player: any;
  @Input() nombre:any;
  @Input() foto: any;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goPlayer(){
    this.route.navigate(['player', {id: this.id_player}]);
  }

}
