import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Company, Education, Project, Skill } from './structs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  workHistory: Company[] = [];
  osProjects: Project[] = [];
  education: Education[] = [];
  allSkills: Skill[] = [];
  expandAll: boolean = false;

  toggleExpanded(): void {
    this.expandAll = !this.expandAll;
  }

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.workHistory = this.experienceService.getCompanies();
    this.osProjects = this.experienceService.getOpenSourceProjects();
    this.education = this.experienceService.getEducation();
    this.allSkills = this.experienceService.getSkills();
  }

  getFilteredSkills(type: string): Skill[] {
    return this.allSkills.filter(s => s.type === type);
  }

}
