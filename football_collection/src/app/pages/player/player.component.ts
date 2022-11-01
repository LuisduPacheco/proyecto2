import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  id:any;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
  }

  ngOnInit(): void {
  }

}
