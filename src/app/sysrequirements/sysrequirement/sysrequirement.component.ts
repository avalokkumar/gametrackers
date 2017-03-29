import { Component, OnInit } from '@angular/core';
import {SysRequirement} from "../shared/sysrequirement.model";

@Component({
  selector: 'app-sysrequirement',
  templateUrl: './sysrequirement.component.html',
  styleUrls: ['./sysrequirement.component.css']
})
export class SysrequirementComponent implements OnInit {

  sysRequirement: SysRequirement;

  constructor() { }

  ngOnInit() {
  }

}
