import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildService } from './../build.service';

@Component({
  selector: 'app-builds-options',
  templateUrl: './builds-options.component.html',
  styleUrls: ['./builds-options.component.css']
})

export class BuildsOptionsComponent implements OnInit {
  public domain: string;

  constructor(public buildService: BuildService, private router: Router) {
    if (this.buildService.domain) {
      this.domain = buildService.domain;
    } else {
      this.router.navigate(['builds/domains']);
    }
  }

  ngOnInit() {
  }

}
