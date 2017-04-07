import { Component, OnInit } from '@angular/core';
import {Auth} from '../../login/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'Gametrackers';

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

}
