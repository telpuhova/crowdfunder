import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  project;
  showThanks = false;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,//for retrieving parameters from url
    private location: Location//for retrieving parameters from url
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => { this.projectId = urlParameters['id'] });
    this.project = this.projectService.getProjectById(this.projectId);
  }

  makeAPledge(userPledge: string) {
    let pledge: number = parseInt(userPledge);
    this.showThanks = true;
    // console.log(this.project);
    this.projectService.updatePledged(pledge, this.projectId);
  }

}
