import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { CategoryPipe } from '../category.pipe';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  filterByCategory: string = 'all';

  onChange(optionFromMenu) {
    this.filterByCategory = optionFromMenu;
  }

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetails(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

}
