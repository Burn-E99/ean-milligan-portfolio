import { Component, Input, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { Skill } from '../structs';

@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.scss']
})
export class TyperComponent implements OnInit {
  @Input() skillList: Skill[] = [];
  currentWord: string[] = [];
  currentIdx: number = -1;
  
  constructor(private experienceService: ExperienceService) {}

  shuffleList(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  startTyping(): void {
    this.currentIdx++;
    if (this.currentIdx >= this.skillList.length) {
      this.currentIdx = 0;
    }

    if (this.currentIdx === 0) {
      this.shuffleList(this.skillList);
    }
    
    const wordToType = this.skillList[this.currentIdx].name;

    this.typeWord(wordToType.split(''));
  }

  deleteWord(): void {
    if (this.currentWord.length > 0) {
      setTimeout(() => {
        this.currentWord.pop();
        this.deleteWord();
      }, 75);
    } else {
      setTimeout(() => {
        this.startTyping();
      }, 200);
    }
  }

  typeWord(wordToType: string[]): void {
    if (wordToType.length > 0) {
      setTimeout(() => {
        this.currentWord.push(wordToType.shift() || '');
        this.typeWord(wordToType);
      }, 125);
    } else {
      setTimeout(() => {
        this.deleteWord();
      }, 2500);
    }
  }

  ngOnInit(): void {
    this.startTyping();
  }

  onHover(enter: boolean): void {
    this.experienceService.setHoveredSkillId(enter ? this.skillList[this.currentIdx].id : '');
  }

}
