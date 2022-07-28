import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { COMPANIES, EDUCATION, OSPROJECTS, SKILLS } from './data';
import { Company, Education, Project, Skill } from './structs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  hoveredSkillId: string = '';
  hoveredProjectId: string = '';
  
  hoveredSkillIdChange: Subject<string> = new Subject<string>();
  hoveredProjectIdChange: Subject<string> = new Subject<string>();

  constructor() { 
    this.hoveredSkillIdChange.subscribe(value => this.hoveredSkillId = value);
    this.hoveredProjectIdChange.subscribe(value => this.hoveredProjectId = value);
  }

  setHoveredSkillId(value: string) {
    this.hoveredSkillIdChange.next(value);
  }

  setHoveredProjectId(value: string) {
    this.hoveredProjectIdChange.next(value);
  }

  // Data
  getEducation(): Education[] {
    return EDUCATION;
  }

  getCompanies(): Company[] {
    return COMPANIES;
  }

  getOpenSourceProjects(): Project[] {
    return OSPROJECTS;
  }

  getSkills(): Skill[] {
    return SKILLS;
  }
}
