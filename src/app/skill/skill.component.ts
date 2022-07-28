import { Component, Input } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { Skill } from '../structs';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() skill: Skill = <Skill>{};
  shouldHover: boolean = false;

  constructor(private experienceService: ExperienceService) {
    this.experienceService.hoveredProjectIdChange.subscribe(value => this.shouldHover = this.skill.projects.includes(value));
  }

  onHover(enter: boolean): void {
    this.shouldHover = enter;
    this.experienceService.setHoveredSkillId(enter ? this.skill.id : '');
  }

}
