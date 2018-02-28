import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { PROJECTS } from './mock-project';

@Injectable()
export class ProjectService {
  projects = PROJECTS;

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id) {//checks name for now
    for (let i=0; i < this.projects.length; i++) {
      if (this.projects[i].name === id) {
        return this.projects[i];
      }
    }
  }

}
