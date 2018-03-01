import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { PROJECTS } from './mock-project';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(public database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: string) {
    return this.database.object('projects/' + id);
  }

  updatePledged(newPledged, projectId) {
    let projectEntryInFirebase = this.getProjectById(projectId);
    projectEntryInFirebase.update({
      pledged: newPledged
    });
  }

}
