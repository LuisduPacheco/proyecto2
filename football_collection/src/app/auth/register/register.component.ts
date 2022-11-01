import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/shared/services/principal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private principalservice: PrincipalService) { }

  ngOnInit(): void {
  }

}
