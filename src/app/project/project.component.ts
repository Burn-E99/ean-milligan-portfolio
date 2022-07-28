import { Component, Input } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { Project } from '../structs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project: Project = <Project>{};
  shouldHover: boolean = false;

  constructor(private experienceService: ExperienceService) {
    this.experienceService.hoveredSkillIdChange.subscribe(value => this.shouldHover = this.project.skills.includes(value));
  }

  onHover(enter: boolean): void {
    this.shouldHover = enter;
    this.experienceService.setHoveredProjectId(enter ? this.project.id : '');
  }

}
