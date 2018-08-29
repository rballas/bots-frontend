import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildService } from './../build.service';

@Component({
  selector: 'app-builds-domains',
  templateUrl: './builds-domains.component.html',
  styleUrls: ['./builds-domains.component.css']
})

export class BuildsDomainsComponent implements OnInit {
  public domain: string;

  constructor(public buildService: BuildService, private router: Router) { }

  ngOnInit() {
  }

  selectDomain(domain) {
    this.buildService.domain = domain;
    this.domain = domain;
  }

  nextOptions() {
    this.router.navigate(['builds/options']);
  }

}
